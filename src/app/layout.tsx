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
