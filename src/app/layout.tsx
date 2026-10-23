import './globals.css';
import type { Metadata } from 'next';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { site } from '../lib/site';

const display = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable} bg-[#0c0d0e] text-zinc-100 antialiased font-[family-name:var(--font-body)]`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
