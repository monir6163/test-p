'use client';

import { isLoggedIn } from '@/hooks/useUserStatusCheck';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Homepage = () => {
  const router = useRouter();
  const isAdminLoggedIn = isLoggedIn();

  useEffect(() => {
    if (isAdminLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router, isAdminLoggedIn]);

  return null;
};

export default Homepage;
