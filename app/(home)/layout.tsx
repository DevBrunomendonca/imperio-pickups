import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";

import Footer from "./_components/footer";
import Header from "./_components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Império das Pickups",
  description:
    "Receba 1,4% ao mês sobre seu investimento de forma segura e transparente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-br">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
