import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kartikey Kumar Tripathi — GenAI Engineer & Software Developer',
  description:
    'Portfolio of Kartikey Kumar Tripathi — Building AI Applications, Intelligent Systems, and Scalable Software Solutions. Based in Lucknow, India.',
  keywords: ['Kartikey Kumar Tripathi', 'GenAI Engineer', 'Software Developer', 'AI', 'Django', 'Python', 'Portfolio'],
  authors: [{ name: 'Kartikey Kumar Tripathi' }],
  openGraph: {
    title: 'Kartikey Kumar Tripathi — GenAI Engineer & Software Developer',
    description: 'Building AI Applications, Intelligent Systems, and Scalable Software Solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-outfit antialiased">
        {children}
      </body>
    </html>
  );
}
