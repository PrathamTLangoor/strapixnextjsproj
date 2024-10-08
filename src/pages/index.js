import localFont from "next/font/local";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);
  
  return (
    <>
      <div className=" text-[3rem] pt-4 font-bold text-center">
        Welcome To <span className="font-extralight italic">Go Go</span> Employee!
      </div>
    </>
  );
}
