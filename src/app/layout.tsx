import { ClerkProvider } from '@clerk/nextjs/app-beta';
import './globals.css';
import { Righteous } from 'next/font/google';
import { Header } from '@/components/header';

const lobster = Righteous({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Kawfi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lobster.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
