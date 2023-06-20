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
        <body className={`${inter.className} bg-[#0c1f23]`}>
          <div className="pb-[48px]">{children}</div>
          <Header />
        </body>
      </html>
    </ClerkProvider>
  );
}
