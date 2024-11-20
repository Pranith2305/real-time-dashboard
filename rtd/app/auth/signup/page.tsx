'use client';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return <SignUp path="/auth/signup" routing="path" />;
};

export default SignUpPage;