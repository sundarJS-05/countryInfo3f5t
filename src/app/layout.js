
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutContainer from "@/components/LayoutContainer";
import { cn } from "@/lib/utils";


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

// Google Font - Inter
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <LayoutContainer>

        {/* initially present code */}
      {/* <body  className= {`${geistSans.variable} ${geistMono.variable} antialiased` }  > */}

      <body
          className={cn(
            "min-h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white/90 antialiased",
            geistSans.variable, // Local font GeistSans
            geistMono.variable, // Local font GeistMono
            inter.className // Google font Inter
          )}
        >

        <Navbar/>

        <br></br>

        <div className="max-w-screen-2xl mx-auto p-4 md:px-12">
          
        {/* children prop=passed componets */}
        {children}

        </div>

      </body>

      {/* Layout */}
      </LayoutContainer>

    </html>
  );
}
