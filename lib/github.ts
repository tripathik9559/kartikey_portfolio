// lib/github.ts — Real GitHub API types and fetcher utilities

export interface GitHubUser {
  login:        string;
  public_repos: number;
  followers:    number;
  following:    number;
  created_at:   string;
}

export interface GitHubRepo {
  id:                number;
  name:              string;
  description:       string | null;
  html_url:          string;
  stargazers_count:  number;
  forks_count:       number;
  language:          string | null;
  updated_at:        string;
  topics:            string[];
  fork:              boolean;
}

const GH_BASE = 'https://api.github.com';
const USERNAME = 'tripathik9559';

/** Fetch basic user profile — gets real public_repos count, followers, etc. */
export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GH_BASE}/users/${USERNAME}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 }, // cache 1h in Next.js
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

/** Fetch all public repos — up to 100 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GH_BASE}/users/${USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: 'application/vnd.github.v3+json' },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data: GitHubRepo[] = await res.json();
    return data.filter((r) => !r.fork); // exclude forks
  } catch {
    return [];
  }
}

/** Derive top languages from repo list */
export function topLanguages(repos: GitHubRepo[]): { lang: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
  }
  return Object.entries(counts)
    .map(([lang, count]) => ({ lang, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

/** Language accent colours for known languages */
export const LANG_COLORS: Record<string, string> = {
  Python:     '#3776AB',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
  Java:       '#ED8B00',
  'C++':      '#00599C',
  Shell:      '#89E051',
  Dockerfile: '#2496ED',
};
