// lib/data.ts — All real portfolio content (updated from resume + personal data)

export const personalInfo = {
  name: 'Kartikey Kumar Tripathi',
  shortName: 'KKT',
  initials: 'KKT',
  role: 'GenAI Engineer & Software Developer',
  email: 'tripathik9559@gmail.com',
  phone: '+91-7393840171',
  linkedin: 'https://www.linkedin.com/in/kartikey-kumar-tripathi-92912b29b',
  github: 'https://github.com/tripathik9559',
  location: 'Lucknow, Uttar Pradesh, India',
  available: true,
  bio: [
    'B.Tech Computer Science student (2022–2026) at BBDNIIT with hands-on experience in Python, Django, PostgreSQL, Docker, and cloud deployment. Interned at Softpro India and received "Best Project" recognition.',
    'Focused on backend engineering and currently expanding into Generative AI and intelligent software systems.',
  ],
  summary:
    'Computer Science student with hands-on experience in Python, Django, PostgreSQL, Docker, and cloud deployment. Skilled in backend development, FastAPI, database design, debugging, testing, and software engineering fundamentals. Passionate about solving real-world problems using software and AI-driven solutions.',
};

export const stats = [
  { value: '1',      label: 'Internship',          sublabel: 'Softpro India · Best Project Award' },
  { value: '11',     label: 'GitHub Repos',         sublabel: 'Real projects & experiments'        },
  { value: '7.3',    label: 'CGPA',                 sublabel: 'B.Tech CSE · BBDNIIT'               },
];

// ─── Work Experience ───────────────────────────────────────────────
export const experience = [
  {
    role:     'Software Development Intern',
    company:  'Softpro India Computer Technologies Pvt. Ltd.',
    period:   'March 2024 – November 2024',
    location: 'India',
    award:    'Best Project Recognition',
    bullets: [
      'Developed backend modules using Python and SQL for automation and data processing.',
      'Contributed to debugging, testing, and optimisation of software components to improve performance and reliability.',
      'Collaborated with team members during development and troubleshooting activities to deliver efficient software solutions.',
      'Received "Best Project" recognition for contribution, execution, and overall project performance.',
    ],
  },
];

// ─── Certifications ────────────────────────────────────────────────
export const certifications = [
  {
    title:    'Python Programming Internship',
    issuer:   'CORIZO (Mood Indigo – IIT Bombay)',
    period:   'Jul 2025 – Aug 2025',
    desc:     'Completed internship focused on Python programming, logic building, problem-solving, and practical project development.',
  },
];

// ─── Education ─────────────────────────────────────────────────────
export const education = [
  {
    degree:  'B.Tech in Computer Science & Engineering',
    school:  'Babu Banarasi Das Northern India Institute of Technology (BBDNIIT)',
    period:  '2022 – 2026',
    grade:   'CGPA: 7.3',
  },
  {
    degree:  'Intermediate (Class XII)',
    school:  'New Wisdom Way Progressive Inter College',
    period:  '2020 – 2022',
    grade:   '71.8%',
  },
  {
    degree:  'High School (Class X)',
    school:  'New Wisdom Way Progressive Inter College',
    period:  '2018 – 2020',
    grade:   '79.8%',
  },
];

// ─── Career Timeline (right panel) ─────────────────────────────────
export const careerTimeline = [
  {
    year:     '2022',
    title:    'Started B.Tech CSE',
    subtitle: 'BBDNIIT, Lucknow',
    color:    '#3B82F6',
  },
  {
    year:     '2023',
    title:    'Python & Django',
    subtitle: 'Backend Development',
    color:    '#06B6D4',
  },
  {
    year:     '2023',
    title:    'Artistic Avenue',
    subtitle: 'First full-stack project',
    color:    '#8B5CF6',
  },
  {
    year:     '2024',
    title:    'Internship @ Softpro India',
    subtitle: 'Best Project Award 🏆',
    color:    '#10B981',
  },
  {
    year:     '2024',
    title:    'Generative AI & Agents',
    subtitle: 'LLMs · RAG · LangChain',
    color:    '#F59E0B',
  },
];

// ─── Current Focus ──────────────────────────────────────────────────
export const currentFocus = {
  title:       'Generative AI Engineering',
  description: 'Learning LLM applications, prompt engineering, RAG pipelines, LangChain, OpenAI APIs and AI-powered software systems.',
  tags:        ['LangChain', 'OpenAI APIs', 'Prompt Engineering', 'RAG', 'Vector Databases', 'LLM Applications'],
};

// ─── GitHub Stats (real: 11 repositories) ──────────────────────────
// NOTE: Connect GitHub API (https://api.github.com/users/tripathik9559) for live data
export const githubStats = {
  repositories: 11,
  // Commit count & contributions: fetch from GitHub API — do NOT use fake numbers
  // API: GET https://api.github.com/users/tripathik9559/repos
  note: 'Connect GitHub API for live commit/contribution counts',
};

// ─── Learning Progress ─────────────────────────────────────────────
export const learningProgress = [
  { skill: 'Python',           pct: 90, color: '#3776AB'  },
  { skill: 'SQL',              pct: 90, color: '#06B6D4'  },
  { skill: 'Django / FastAPI', pct: 85, color: '#44B78B'  },
  { skill: 'Generative AI',    pct: 70, color: '#EC4899'  },
  { skill: 'RAG Systems',      pct: 65, color: '#8B5CF6'  },
  { skill: 'LangChain',        pct: 55, color: '#10B981'  },
];

// ─── Skills (from resume — 100% accurate) ──────────────────────────
export const skills = {
  'Programming Languages': {
    icon:  'code',
    color: '#3B82F6',
    glow:  'rgba(59,130,246,0.15)',
    items: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  'Frameworks & Technologies': {
    icon:  'layers',
    color: '#06B6D4',
    glow:  'rgba(6,182,212,0.15)',
    items: ['Django', 'FastAPI', 'Docker'],
  },
  'Databases': {
    icon:  'database',
    color: '#8B5CF6',
    glow:  'rgba(139,92,246,0.15)',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  'Tools & Platforms': {
    icon:  'wrench',
    color: '#10B981',
    glow:  'rgba(16,185,129,0.15)',
    items: ['Git / GitHub', 'VS Code', 'Railway Cloud', 'Gunicorn', 'Render'],
  },
  'Core CS Concepts': {
    icon:  'brain',
    color: '#F59E0B',
    glow:  'rgba(245,158,11,0.15)',
    items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'SDLC'],
  },
  'AI & GenAI (Learning)': {
    icon:  'sparkles',
    color: '#EC4899',
    glow:  'rgba(236,72,153,0.15)',
    items: ['Prompt Engineering', 'RAG Systems', 'AI Agents', 'LangChain', 'OpenAI APIs', 'LLM Applications'],
  },
};

// ─── Projects ──────────────────────────────────────────────────────
export interface Project {
  slug:              string;
  title:             string;
  tagline:           string;
  description:       string;
  longDescription:   string;
  status:            'Completed' | 'In Progress' | 'Planning';
  techStack: string[];
  category:          string;
  github:            string | null;
  liveDemo:          string | null;
  featured:          boolean;
  year:              number;
  role:              string;
  problem?:          string;
  solution:          string;
  architecture?:     string;
  contribution?:     string[];
  contributionNote?: string;
  challenges:        string[];
  learnings:         string[];
  features?:         string[];
  metrics?:          { label: string; value: string }[];
  highlights?:       string[];
  problemStatement?: string;
  contributions?:    string[];
  screenshots?:      string[];
}

export const projects: Project[] = [
  {
    slug:  'college-exam-platform',
    title: 'College Examination Platform',
    tagline:
      'Online examination system with AI proctoring, role-based access, and automated result generation',
    description:
      'A complete online examination platform built for institutional use. Supports student authentication with face-capture login, examination management, AI-assisted proctoring, automated result processing, and administrative controls. Deployed live on Render using Docker.',
    longDescription:
      'A production-ready online examination management system developed to digitise the complete exam workflow — from student login with face verification to automated result generation. The platform supports multi-role access (Admin, Teacher, Student), a question bank, timed online exams, answer-key upload, and Redis-powered session management. Containerised with Docker and deployed live on Render.',
    status:    'Completed',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Gunicorn', 'JavaScript', 'HTML/CSS'],
    category:  'Full-Stack',
    github:    'https://github.com/tripathik9559/College-exam-platform',
    liveDemo:  'https://college-exam-platform-1.onrender.com/',
    featured:  true,
    year:      2026,
    role:      'Backend Developer',
    problem:
      'Manual examination workflows in colleges are time-consuming, error-prone, and difficult to scale. Paper-based exams offer no real-time monitoring, slow result processing, and no way to prevent malpractice remotely.',
    solution:
      'A web-based platform where admins configure question banks, teachers upload answer keys and schedule exams, and students log in with face-capture verification. Exams are auto-timed, auto-graded, and results are generated instantly after submission.',
    contribution: [
      'Full backend architecture using Django and PostgreSQL',
      'Redis-based session management for secure exam flows',
      'Face-capture login and AI proctoring integration',
      'Docker containerisation and Render deployment',
      'Role-based access control for Admin, Teacher, Student',
    ],
    architecture:
      'Django MVT architecture with PostgreSQL as the primary database and Redis for session management and caching. Docker Compose orchestrates all services (web, db, redis). Gunicorn serves the Django app. Deployed on Render cloud. Face-capture login uses browser camera API with server-side verification.',
    challenges: [
      'Implementing real-time face-capture login verification that works reliably across different browsers and lighting conditions.',
      'Designing a secure exam session system using Redis so timed exams survive page refreshes without exposing answer data to the client.',
      'Setting up Docker Compose to orchestrate Django + PostgreSQL + Redis + Gunicorn together with correct environment variable management for Render deployment.',
    ],
    learnings: [
      'Deep understanding of Django session management and Redis integration for stateful exam workflows.',
      'Docker Compose multi-service orchestration and the difference between development and production containerisation.',
      'How to design secure exam flows that prevent cheating at the application layer — not just the UI layer.',
    ],
    features: [
      'Face-capture login verification (AI proctoring)',
      'Multi-role access: Admin / Teacher / Student',
      'Online timed examinations with auto-submit',
      'Answer-key upload by teachers',
      'Automated result generation & display',
      'Redis-powered session management',
      'Docker containerised deployment',
      'Live on Render cloud',
    ],
    metrics: [
      { label: 'Deployment',   value: 'Live ✅'       },
      { label: 'Backend',      value: 'Django + Redis' },
      { label: 'User Roles',   value: '3'             },
    ],
  },

  {
    slug:  'ai-train-traffic-control',
    title: 'AI Train Traffic Control',
    tagline:
      'AI-assisted railway traffic management system for throughput optimisation and conflict detection',
    description:
      'An AI-powered railway traffic management and decision support platform designed to optimise train scheduling, route allocation, congestion prediction, conflict detection, and railway network operational efficiency.',
    longDescription:
      'A research-backed backend system for intelligent railway operations. The platform models the railway network to detect scheduling conflicts, predict congestion, and generate AI-assisted decisions for train movement. Includes simulation workflows, a structured database schema for railway operations, and a backend API for decision-support modules. Currently under active development.',
    status:    'In Progress',
    techStack: ['Python', 'Django', 'MySQL', 'AI/ML', 'Optimisation Algorithms', 'Data Visualisation'],
    category:  'AI/ML',
    github:    null,
    liveDemo:  null,
    featured:  true,
    year:      2026,
    role:      'Backend Developer & Research Contributor',
    problem:
      'Railway networks face chronic scheduling conflicts, cascading delays, and inefficient route allocation due to manual decision-making. Real-time optimisation requires processing multiple constraints simultaneously — track occupancy, speed limits, platform availability, and passenger demand.',
    solution:
      'An AI-assisted decision-support backend that models the railway network as a constraint graph, detects conflicts in scheduling, and recommends optimal train movements. Simulation workflows allow operators to test scenarios before applying decisions to live operations.',
    contribution: [
      'Backend development using Django',
      'Database design and API development',
      'Traffic scheduling logic integration',
      'System architecture collaboration',
    ],
    contributionNote: 'Machine Learning models were developed collaboratively with team members.',
    architecture:
      'Django backend with MySQL database storing railway topology, train schedules, and conflict logs. Optimisation layer using Python-based constraint algorithms. Backend API serves decision recommendations to a dashboard frontend. Simulation engine replicates network state for scenario testing.',
    challenges: [
      'Modelling a complex railway network with all scheduling constraints (track segments, platform capacity, speed zones) as a solvable optimisation problem.',
      'Designing a simulation engine that accurately replicates network state without requiring physical sensor integration during development.',
      'Building AI-driven decision modules that generate human-understandable recommendations rather than opaque algorithmic outputs.',
    ],
    learnings: [
      'Applied operations research and constraint satisfaction to a real infrastructure problem — significantly harder than textbook examples.',
      'How to design decision-support systems where AI assists operators rather than replacing them — trust and explainability are critical.',
      'Database schema design for time-series operational data (train positions, schedules, conflict events) in MySQL.',
    ],
    features: [
      'Railway network graph modelling',
      'Conflict detection & scheduling optimisation',
      'Congestion & delay prediction',
      'AI-driven decision-support modules',
      'Simulation engine for scenario testing',
      'Operations dashboard backend API',
      'Database schema for railway operations',
    ],
    metrics: [
      { label: 'Status',   value: 'In Progress' },
      { label: 'Role',     value: 'Backend Dev' },
      { label: 'Domain',   value: 'AI + Railways' },
    ],
  },

  {
    slug:  'artistic-avenue',
    title: 'Artistic Avenue',
    tagline:
      'Django-based online art marketplace connecting artists with buyers',
    description:
      'A full-featured online art marketplace built with Django where artists create profiles, upload and manage artwork listings, and buyers can browse and purchase creative work — all through a clean, role-based platform.',
    longDescription:
      'Artistic Avenue is a Django-powered digital marketplace that solves a real problem for independent artists — visibility and monetisation. The platform supports two primary user roles (Artist and Buyer), artwork listings with image uploads, product browsing by category, and a full admin portal for management. Built as a complete full-stack project from scratch.',
    status:    'Completed',
    techStack: ['Python', 'Django', 'SQLite', 'JavaScript', 'HTML', 'CSS'],
    category:  'Full-Stack',
    github:    'https://github.com/tripathik9559/Artistic_Avenue',
    liveDemo:  'https://artistic-avenue.onrender.com/',
    featured:  true,
    year:      2023,
    role:      'Full-Stack Developer',
    problem:
      'Independent artists lack affordable and straightforward platforms to showcase and sell original artwork. Existing marketplaces have high commissions, complex interfaces, and are not focused on independent creators.',
    solution:
      'A dedicated art marketplace where artists sign up, build a profile, and list artwork with images and descriptions. Buyers browse by category, view artist profiles, and connect directly. Admins manage the platform through Django admin portal.',
    contribution: [
      'Full-stack development from database design to frontend templates',
      'Multi-role authentication system (Artist / Buyer)',
      'Artwork listing with image upload and category browsing',
      'Django admin portal configuration for platform management',
    ],
    architecture:
      'Django MVT architecture. SQLite database for development (designed to be PostgreSQL-ready). Django file storage handles media uploads. Django built-in auth with role separation between Artist and Buyer. Category-based browsing using Django ORM QuerySets with filter chaining.',
    challenges: [
      'Designing a multi-role system where Artists and Buyers have separate dashboards, permissions, and workflows within Django\'s single authentication framework.',
      'Handling image upload, storage, and serving efficiently with Django\'s MEDIA_ROOT and MEDIA_URL configuration.',
      'Building a complete marketplace experience (browse → view → contact/purchase) without a JavaScript frontend framework — pure HTML/CSS/JS.',
    ],
    learnings: [
      'Full product development lifecycle — from idea to a working, deployed Django application.',
      'Django media file handling and the difference between static files and user-uploaded media.',
      'How marketplace UX differs from informational websites — discovery, trust signals, and profile pages are critical.',
    ],
    features: [
      'Artist registration & profile pages',
      'Artwork listings with image upload',
      'Category-based browsing',
      'Buyer and Artist role separation',
      'Django admin portal for management',
      'Artwork detail pages',
      'Responsive layout',
    ],
    metrics: [
      { label: 'Framework', value: 'Django'      },
      { label: 'Type',      value: 'Marketplace' },
      { label: 'Status',    value: 'Completed'   },
    ],
  },
];

// ─── Archive Projects ───────────────────────────────────────────────
export const archiveProjects = [
  { name: 'Taskflow Team Manager',      stack: 'Node.js, Express, MySQL',            year: 2024, category: 'Full-Stack',       github: 'https://github.com/tripathik9559/taskflow-team-task-manager' },
  { name: 'Stock Price Prediction',     stack: 'Python, Pandas, Linear Regression',  year: 2024, category: 'Data Analysis',    github: 'https://github.com/tripathik9559/Stock-Price-Prediction' },
  { name: 'IPL Data Analysis',          stack: 'Python, Pandas, Matplotlib',         year: 2023, category: 'Data Analysis',    github: 'https://github.com/tripathik9559/IPL-Data-Analysis' },
  { name: 'Smart Object Detection',     stack: 'Python, OpenCV',                     year: 2025, category: 'Computer Vision',  github: 'https://github.com/tripathik9559/Smart-Object-Detection' },
  { name: 'AI Honeypot Scam Detection', stack: 'Python, BERT, LLM',                 year: 2026, category: 'AI/ML',            github: 'https://github.com/tripathik9559/ai-honeypot-scam-detection' },
  { name: 'eSEHAT-NABHA',              stack: 'JavaScript, HTML, CSS',              year: 2023, category: 'Frontend',         github: 'https://github.com/tripathik9559/eSEHAT-NABHA' },
  { name: 'JOB_PORTAL',                stack: 'HTML, CSS, JavaScript',              year: 2023, category: 'Frontend',         github: 'https://github.com/tripathik9559/JOB_PORTAL' },
  { name: 'Prototype Frontend',         stack: 'HTML, CSS, JavaScript',              year: 2023, category: 'Frontend',         github: 'https://github.com/tripathik9559/prototype-frontend' },
];

// ─── Tech stack icons (orbit animation) ────────────────────────────
export const techStackIcons = [
  { label: 'Py',  color: '#3776AB', glow: '55,118,171', title: 'Python'     },
  { label: 'Dj',  color: '#44B78B', glow: '68,183,139', title: 'Django'     },
  { label: 'PG',  color: '#336791', glow: '51,103,145', title: 'PostgreSQL' },
  { label: 'Dk',  color: '#2496ED', glow: '36,150,237', title: 'Docker'     },
  { label: 'Nj',  color: '#339933', glow: '51,153,51',  title: 'Node.js'    },
];

// ─── Navigation ─────────────────────────────────────────────────────
export const navItems = [
  { label: 'Home',     href: '/',          icon: 'home'    },
  { label: 'About',    href: '/#about',    icon: 'user'    },
  { label: 'Projects', href: '/#projects', icon: 'folder'  },
  { label: 'Skills',   href: '/skills',    icon: 'layers'  },
  { label: 'Archive',  href: '/archive',   icon: 'archive' },
  { label: 'Contact',  href: '/contact',   icon: 'mail'    },
];

// ─── Extended project entries for detail pages ───────────────────────
export const extendedProjects: Project[] = [
  {
    slug:        'taskflow-team-manager',
    title:       'Taskflow Team Manager',
    tagline:     'Collaborative task management platform for teams',
    description: 'A full-stack team task management application built for a real-world job application challenge. Taskflow enables teams to create projects, assign tasks, track progress, and collaborate in real time. Built with Node.js and Express on the backend, React on the frontend, and deployed on Railway with PostgreSQL.',
    longDescription: 'Taskflow was built under a strict 2-day deadline as part of a job application challenge. The application handles multi-user project workspaces, role-based task assignment, status tracking, and a clean dashboard UI. The backend uses Express REST APIs with PostgreSQL via raw SQL queries, while the React frontend delivers a responsive, intuitive interface. The project was originally built with MySQL and later migrated to PostgreSQL for Railway deployment.',
    category:    'Full-Stack',
    status:      'Completed',
    year:        2024,
    role:        'Full-Stack Developer',
    techStack:   ['Node.js', 'Express', 'PostgreSQL', 'React', 'Railway', 'REST API'],
    github:      'https://github.com/tripathik9559/taskflow-team-task-manager',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Built complete full-stack app in under 2 days for job application',
      'REST API with Express handling project, task, and member endpoints',
      'React frontend with project dashboard and task status board',
      'PostgreSQL database with relational schema for projects and members',
      'Deployed live on Railway cloud platform',
    ],
    problemStatement: 'Teams needed a simple, fast tool to manage tasks across projects without the complexity of enterprise tools.',
    solution:         'Built a clean, focused task manager with project workspaces, member management, and real-time status updates — all deployed and functional within 48 hours.',
    contributions:    [
      'Designed REST API architecture with Express',
      'Built React UI with project board and task views',
      'Managed PostgreSQL schema and raw SQL queries',
      'Handled Railway deployment and environment config',
    ],
    challenges: [
      'Migrating from MySQL to PostgreSQL mid-project for Railway compatibility',
      'Debugging a SQL query referencing a non-existent joined_at column in project_members',
      'Building complete frontend + backend in a 48-hour window',
    ],
    learnings: [
      'Importance of schema validation before deployment',
      'Rapid full-stack development under deadline pressure',
      'Railway deployment and environment variable management',
    ],
    screenshots: [],
  },
  {
    slug:        'stock-price-prediction',
    title:       'Stock Price Prediction',
    tagline:     'ML model to forecast stock prices using historical data',
    description: 'A data science project that uses Linear Regression and historical stock market data to predict future stock prices. Built with Python, Pandas for data wrangling, and Matplotlib for visualisation.',
    longDescription: 'This project explores the fundamentals of supervised machine learning applied to financial data. Historical stock price data is cleaned, processed, and fed into a Linear Regression model to forecast future closing prices. The project includes data visualisation of trends, prediction plots, and model evaluation metrics.',
    category:    'Data Analysis',
    status:      'Completed',
    year:        2024,
    role:        'Data Analyst / ML Developer',
    techStack:   ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Linear Regression'],
    github:      'https://github.com/tripathik9559/Stock-Price-Prediction',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Linear Regression model trained on historical OHLCV data',
      'Data cleaning and feature engineering with Pandas',
      'Prediction vs actual price visualisation with Matplotlib',
      'Model evaluation using MAE and RMSE metrics',
    ],
    problemStatement: 'Financial analysts need quick insight into stock price trends without expensive tools.',
    solution:         'Built an accessible Python-based prediction pipeline that cleans real stock data, trains a regression model, and plots predictions clearly.',
    contributions:    [
      'Data collection and preprocessing pipeline',
      'Feature engineering from raw OHLCV data',
      'Linear Regression model training and evaluation',
      'Visualisation of predictions vs actual prices',
    ],
    challenges: [
      'Handling missing and inconsistent financial data',
      'Choosing the right features to avoid overfitting',
      'Interpreting model accuracy in a volatile domain',
    ],
    learnings: [
      'Practical understanding of supervised ML on real data',
      'Importance of feature selection in time-series prediction',
      'Financial data preprocessing techniques',
    ],
    screenshots: [],
  },
  {
    slug:        'ipl-data-analysis',
    title:       'IPL Data Analysis',
    tagline:     'Exploratory analysis of IPL cricket data with visualisations',
    description: 'An exploratory data analysis (EDA) project on Indian Premier League cricket match data. Uses Python, Pandas, and Matplotlib to uncover team performance trends, top batsmen/bowlers, and match outcome patterns.',
    longDescription: 'Using multiple seasons of IPL match and delivery data, this project performs deep exploratory analysis to surface meaningful insights. Key analyses include win percentage by team, top run scorers, economy rates, venue impact on match outcomes, and season-wise performance comparisons — all presented through clear visualisations.',
    category:    'Data Analysis',
    status:      'Completed',
    year:        2023,
    role:        'Data Analyst',
    techStack:   ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy', 'Jupyter Notebook'],
    github:      'https://github.com/tripathik9559/IPL-Data-Analysis',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Multi-season IPL dataset analysis with Pandas',
      'Team win percentage and performance trend charts',
      'Top batsmen and bowlers by season visualisation',
      'Venue and toss impact analysis',
    ],
    problemStatement: 'Cricket fans and analysts want data-backed insights about IPL performance beyond basic scorecards.',
    solution:         'Built a comprehensive EDA notebook with 15+ visualisations covering team, player, and venue-level insights from raw match data.',
    contributions:    [
      'Dataset loading, cleaning and merging multiple CSVs',
      'Aggregation queries for team and player stats',
      'Matplotlib and Seaborn chart generation',
      'Insight documentation in Jupyter Notebook',
    ],
    challenges: [
      'Merging ball-by-ball data with match metadata accurately',
      'Handling inconsistent team name spellings across seasons',
      'Designing charts that communicate clearly without clutter',
    ],
    learnings: [
      'Advanced Pandas groupby and aggregation techniques',
      'Effective data storytelling through visualisation',
      'Working with multi-file real-world datasets',
    ],
    screenshots: [],
  },
  {
    slug:        'smart-object-detection',
    title:       'Smart Object Detection',
    tagline:     'Real-time object detection using Python and OpenCV',
    description: 'A computer vision project that implements real-time object detection using Python and OpenCV. Identifies and annotates objects in video streams and images using pre-trained detection models.',
    longDescription: 'This project was my introduction to computer vision — using OpenCV to capture video frames, apply object detection models, and draw bounding boxes with class labels in real time. The project sparked a strong interest in intelligent systems and AI-powered applications, eventually influencing my career direction towards GenAI engineering.',
    category:    'Computer Vision',
    status:      'Completed',
    year:        2025,
    role:        'ML Developer',
    techStack:   ['Python', 'OpenCV', 'NumPy', 'YOLO / Haar Cascade', 'Computer Vision'],
    github:      'https://github.com/tripathik9559/Smart-Object-Detection',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Real-time object detection from webcam and video files',
      'Bounding box annotation with class labels and confidence scores',
      'Frame-by-frame processing pipeline with OpenCV',
      'Support for multiple object classes simultaneously',
    ],
    problemStatement: 'Understanding how machines perceive and classify objects in the real world was a key learning goal.',
    solution:         'Built a real-time detection system using OpenCV that processes live video, detects objects, and overlays bounding boxes — a practical introduction to computer vision.',
    contributions:    [
      'Video capture and frame processing pipeline',
      'Object detection model integration',
      'Bounding box and label rendering logic',
      'Performance optimisation for real-time FPS',
    ],
    challenges: [
      'Maintaining real-time FPS while processing each frame',
      'Reducing false positives in complex backgrounds',
      'Integrating pre-trained model weights correctly',
    ],
    learnings: [
      'Core computer vision concepts with OpenCV',
      'How pre-trained models accelerate development',
      'This project directly attracted me towards AI/ML as a career',
    ],
    screenshots: [],
  },
  {
    slug:        'ai-honeypot-scam-detection',
    title:       'AI Honeypot Scam Detection',
    tagline:     'BERT-powered system to detect and classify online scams',
    description: 'An AI-powered scam detection system that uses BERT and Large Language Models to identify honeypot scams, phishing attempts, and fraudulent messages from text data. Combines NLP with LLM-based classification.',
    longDescription: 'This project applies state-of-the-art NLP techniques to a real-world cybersecurity problem — detecting honeypot scams in online messages and communications. BERT is used for text embeddings and classification, while LLM-based prompting is used for explainability. The system can analyse message content and flag suspicious patterns with high accuracy.',
    category:    'AI/ML',
    status:      'Completed',
    year:        2026,
    role:        'AI/ML Developer',
    techStack:   ['Python', 'BERT', 'Transformers', 'LLM', 'HuggingFace', 'NLP', 'scikit-learn'],
    github:      'https://github.com/tripathik9559/ai-honeypot-scam-detection',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'BERT-based text classification for scam detection',
      'LLM prompting for explainable AI decisions',
      'NLP preprocessing pipeline for raw message data',
      'Multi-class classification: phishing, honeypot, legitimate',
    ],
    problemStatement: 'Online scams and honeypot fraud are increasingly sophisticated and hard to detect manually at scale.',
    solution:         'Built an AI pipeline using BERT embeddings and LLM-based reasoning to automatically classify messages as scam or legitimate with explainable output.',
    contributions:    [
      'Text preprocessing and tokenisation pipeline',
      'BERT fine-tuning for scam classification',
      'LLM prompt engineering for explainability layer',
      'Model evaluation with precision, recall, and F1 metrics',
    ],
    challenges: [
      'Curating a balanced training dataset for scam categories',
      'Fine-tuning BERT without overfitting on limited data',
      'Designing effective prompts for LLM-based explanation',
    ],
    learnings: [
      'Practical BERT fine-tuning for classification tasks',
      'LLM prompt engineering for real-world NLP applications',
      'Intersection of cybersecurity and AI/ML',
    ],
    screenshots: [],
  },
  {
    slug:        'esehat-nabha',
    title:       'eSEHAT-NABHA',
    tagline:     'Digital health portal frontend for NABHA-compliant facilities',
    description: 'A frontend web project for a digital health management portal designed for NABHA-accredited healthcare facilities. Built with vanilla JavaScript, HTML, and CSS — focused on clean UI and accessibility.',
    longDescription: 'eSEHAT-NABHA is a frontend healthcare portal designed to digitalise patient-facing workflows in NABHA-accredited hospitals. The project covers patient registration forms, appointment booking UI, doctor listing pages, and a dashboard layout — all built without a framework, focusing on semantic HTML, clean CSS, and accessible design.',
    category:    'Frontend',
    status:      'Completed',
    year:        2023,
    role:        'Frontend Developer',
    techStack:   ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'DOM Manipulation'],
    github:      'https://github.com/tripathik9559/eSEHAT-NABHA',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Multi-page healthcare portal with consistent layout system',
      'Patient registration, appointment booking and doctor listing UI',
      'Fully responsive design across mobile and desktop',
      'Accessible form design following NABHA portal standards',
    ],
    problemStatement: 'Healthcare facilities need simple, accessible digital portals that staff and patients can use without technical barriers.',
    solution:         'Designed and built a clean, accessible multi-page frontend portal covering core healthcare workflows with no framework dependencies.',
    contributions:    [
      'Full UI design and implementation from scratch',
      'Responsive layout system with CSS Grid and Flexbox',
      'Form validation with vanilla JavaScript',
      'Multi-page navigation and consistent component design',
    ],
    challenges: [
      'Building a consistent design system without a CSS framework',
      'Making healthcare forms accessible and error-friendly',
      'Ensuring cross-browser compatibility with no build tools',
    ],
    learnings: [
      'Deep understanding of HTML semantics and CSS layout',
      'Importance of accessibility in healthcare-focused UIs',
      'Vanilla JS DOM manipulation without framework overhead',
    ],
    screenshots: [],
  },
  {
    slug:        'job-portal',
    title:       'Job Portal',
    tagline:     'Frontend job listing and application portal',
    description: 'A frontend-only job portal web application that allows users to browse job listings, filter by category, and view detailed job descriptions. Built with HTML, CSS, and JavaScript.',
    longDescription: 'This job portal project was built as a frontend practice project covering real-world UI patterns — job cards, search and filter, modal views for job details, and a multi-step application form. All interactions are handled in vanilla JavaScript with no backend, demonstrating strong frontend fundamentals.',
    category:    'Frontend',
    status:      'Completed',
    year:        2023,
    role:        'Frontend Developer',
    techStack:   ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'LocalStorage'],
    github:      'https://github.com/tripathik9559/JOB_PORTAL',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'Job listing cards with category and location filters',
      'Modal-based job detail view',
      'Multi-step job application form with validation',
      'LocalStorage-based saved jobs feature',
    ],
    problemStatement: 'Practicing real-world frontend patterns like filtering, modal UIs, and form flows in a meaningful project context.',
    solution:         'Built a complete job portal UI that mirrors real recruitment platforms, covering listing, filtering, detail view, and application flow.',
    contributions:    [
      'Job listing grid with dynamic filter system',
      'Modal overlay for job detail pages',
      'JavaScript form validation and multi-step flow',
      'LocalStorage integration for saved jobs',
    ],
    challenges: [
      'Building a smooth filter system without a framework',
      'Modal focus management and keyboard accessibility',
      'Persisting user data with LocalStorage reliably',
    ],
    learnings: [
      'JavaScript event delegation and DOM patterns',
      'Building reusable UI components without frameworks',
      'LocalStorage for lightweight client-side persistence',
    ],
    screenshots: [],
  },
  {
    slug:        'prototype-frontend',
    title:       'Prototype Frontend',
    tagline:     'UI prototype and design exploration project',
    description: 'A frontend prototype project focused on design exploration, UI component building, and visual layout experimentation using HTML, CSS, and JavaScript.',
    longDescription: 'This project served as a creative sandbox for experimenting with modern CSS techniques, animation, and UI component patterns. Covers layouts, card components, navigation patterns, and micro-interactions — all built from scratch with HTML, CSS, and vanilla JavaScript as a learning and exploration exercise.',
    category:    'Frontend',
    status:      'Completed',
    year:        2023,
    role:        'Frontend Developer',
    techStack:   ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations', 'Flexbox', 'Grid'],
    github:      'https://github.com/tripathik9559/prototype-frontend',
    liveDemo:    null,
    featured:    false,
    highlights:  [
      'CSS animation and transition experimentation',
      'Reusable card and layout component patterns',
      'Navigation and hero section prototypes',
      'CSS Grid and Flexbox layout exploration',
    ],
    problemStatement: 'Building a strong foundation in CSS and UI patterns requires deliberate practice beyond tutorials.',
    solution:         'Created a dedicated prototype project to experiment freely with CSS layouts, animations, and component design without project constraints.',
    contributions:    [
      'Custom CSS animation and transition effects',
      'Responsive layout patterns with Grid and Flexbox',
      'Interactive UI component prototypes',
      'Design system foundations: spacing, typography, colour',
    ],
    challenges: [
      'Achieving smooth animations with pure CSS',
      'Building responsive layouts that work across breakpoints',
      'Organising a growing CSS codebase without a preprocessor',
    ],
    learnings: [
      'Advanced CSS techniques: animations, transforms, variables',
      'Systematic approach to component and layout design',
      'How to build a visual design instinct through iteration',
    ],
    screenshots: [],
  },
];