'use client';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <SignUp path="/auth/signup" routing="path" />
    </div>
  )
};

export default SignUpPage;