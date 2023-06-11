import { UserButton, SignedIn } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav className="h-12 flex items-center justify-between max-w-[900px] sticky top-2 mx-auto rounded-full shadow-md px-8">
        <Link className="text-sm uppercase font-bold" href="/">
          <i>Kawfi ☕️</i>
        </Link>
        <ul></ul>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};
