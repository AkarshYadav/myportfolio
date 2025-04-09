import { Geist, Geist_Mono } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./globals.css";
import "./nprogress.css";
import Navbar from "@/components/Navbar";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akarsh | Portofolio",
  description: "My name is Akarsh Yadav, I am passionate web developer. I'm currently studying at Indian Institute of Information Technology Vadodara.",
  author: "Akarsh Yadav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientTopProgressBar/>
        <Navbar/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
