import { SignedIn, UserButton } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

export const Header = async () => {
  return (
    <header>
      <nav className="fixed bottom-0 left-1/2 mx-auto flex h-12 w-full max-w-[600px] -translate-x-1/2 items-center justify-between border-x border-b border-purple-400 bg-purple-50 px-8 shadow-lg shadow-purple-50">
        <Link className="text-sm font-bold uppercase text-purple-800" href="/">
          <i>Kawfi</i>
        </Link>
        <ul></ul>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};
