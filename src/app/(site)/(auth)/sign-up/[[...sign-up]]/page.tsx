import { SignUp } from '@clerk/nextjs/app-beta';

const SignUpPage = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
