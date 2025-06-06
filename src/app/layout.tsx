import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import Blog from "@/components/blog";
import Testimonials from "@/components/testimonials";
import ActiveLinkProvider from "@/providers/activeLinkProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "19Homes | Your Modern Real Estate Solution",
  description:
    "Discover luxury homes in Nigeria with 19Homes. Buy, rent, or design your dream property. Trusted real estate experts",
  keywords:
    "Lagos real estate, buy house in Nigeria, rent apartment Lagos, modern homes Nigeria, 19Homes properties",
  icons: {
    icon: "/19Homes-icon.png",
  },
  metadataBase: new URL(process.env.NEXT_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "19Homes | Modern Real Estate Solutions",
    description:
      "Find your dream home and create unforgettable architectural experiences in Nigeria with 19Homes .",
    url: process.env.NEXT_SITE_URL || "http://localhost:3000",
    siteName: "19Homes",
    locale: "en_NG",
    images: [
      {
        url: "https://19homes.vercel.app/display-image.png",
        width: 1200,
        height: 630,
        alt: "19Homes - Luxury Real Estate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "19Homes | Modern Real Estate Solutions",
    description: "Find your dream home with 19Homes in Nigeria.",
    images: ["https://19homes.vercel.app/display-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} flex flex-col overscroll-none antialiased`}
      >
        <ActiveLinkProvider>
          <Header />
          {children}
          <section className="mt-13 flex flex-col gap-13 md:mt-25 md:gap-25">
            <Testimonials />
            <Blog />
            <Newsletter />
            <Footer />
          </section>
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
