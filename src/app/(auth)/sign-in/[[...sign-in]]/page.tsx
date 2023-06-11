import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
