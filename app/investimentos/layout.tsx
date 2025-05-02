import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "../globals.css";

import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import HeaderInvestments from "./_components/header-investimenrs";
import FooterInvestments from "./_components/footer-investments";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Império das Pickups - Investimentos",
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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1366903341221843');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body className={`${poppins.className}`}>
        <noscript>
          <Image
            height={1}
            width={1}
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1366903341221843&ev=PageView&noscript=1"
          />
        </noscript>

        <HeaderInvestments />
        {children}
        <FooterInvestments />
      </body>
    </html>
  );
}
