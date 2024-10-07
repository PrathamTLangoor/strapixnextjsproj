import localFont from "next/font/local";

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
  return (
    <>
      <div className=" text-[3rem] pt-4 font-bold text-center">
        Welcome To <span className="font-extralight italic">Go Go</span> Employee!
      </div>
    </>
  );
}
