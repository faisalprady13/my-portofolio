import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Faisal Prady',
  description: 'Portfolio of Muhammad Faisal Ibnu Prady',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated scroll-smooth">
      <head>
        <title>Faisal Prady | Portfolio</title>
        <meta
          name="description"
          content="Faisal Prady - Full Stack Developer Portfolio"
        />
        <meta
          name="keywords"
          content="Faisal Prady, Web Developer, Portfolio, Next.js, Frontend Developer, Frontend Engineer"
        />
        <meta name="author" content="Faisal Prady" />
        <meta property="og:title" content="Faisal Prady | Portfolio" />
        <meta property="og:image" content="/me.png" />
        <meta
          property="og:description"
          content="A showcase of my projects and skills in web development."
        />
        <meta property="og:url" content="https://faisalprady.vercel.app/" />
      </head>
      <body
        cz-shortcut-listen="true"
        className={`${raleway.variable} antialiased relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
