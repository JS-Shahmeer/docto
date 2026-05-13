import "./global.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AOSProvider from "./components/AOSProvider";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Digital Paradigm",
  description: "Smarter Digital Systems for Healthcare",
  other: {
    "google-site-verification": "IVQRJWV5biYqDAHDozVhtBtzlCvMOaRx_60dRtSi7DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MMW035GQGC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MMW035GQGC');
        `}
      </Script>
      <body className={jakarta.className}>
        <AOSProvider>
          <main className="overflow-x-clip">
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </main>
        </AOSProvider>
      </body>
    </html>
  );
}
