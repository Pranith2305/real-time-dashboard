'use client';
import { SignIn } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <SignIn path="/auth/login" routing="path" />
    </div>
  )
};

export default LoginPage;