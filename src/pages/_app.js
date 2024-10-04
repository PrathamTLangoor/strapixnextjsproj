import Layout from "@/components/layout";
import "@/styles/globals.css";
import { DM_Serif_Display } from '@next/font/google';


const arvo = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'], 
});

export default function App({ Component, pageProps }) {
  return (
    <div className={arvo.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
