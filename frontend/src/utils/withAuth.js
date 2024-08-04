// src/components/withAuth.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/auth';
// import verifyToken from '@/utils/verifyToken';

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const router = useRouter();
    const {isAuthenticated} = useAuth();

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('token from withauth', token)

      // console.log(verifyToken(token))
      if (!token || !isAuthenticated) {
        // router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;