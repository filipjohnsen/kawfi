import { ClerkProvider } from '@clerk/nextjs/app-beta';
import '../globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kawfi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="grid h-screen grid-rows-[1fr_64px]">
            <div>{children}</div>
            <Header />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
