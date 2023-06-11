import { SignIn } from '@clerk/nextjs/app-beta';

const SignInPage = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
