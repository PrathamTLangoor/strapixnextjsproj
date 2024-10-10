import Layout from "@/components/layout";
import "@/styles/globals.css";
import { DM_Serif_Display } from '@next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const arvo = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'], 
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    const publicPaths = ['/login', '/register'];
    const pathIsPublic = publicPaths.includes(router.pathname);
  
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
    if (!isAuthenticated && !pathIsPublic) {
      router.push('/login');
    }
  }, [router]);
  
  if (typeof window !== 'undefined' && !localStorage.getItem('isAuthenticated') && router.pathname !== '/login') {
    return null;
  }
  
  return (
    <div className={arvo.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
