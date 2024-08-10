import { DM_Sans, Inter } from "next/font/google";
import Preloader from "@/layout/Preloader";
import MetaTags from "@/layout/meta";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/public/assets/css/animate.min.css";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/flaticon.min.css";
import "@/public/assets/css/fontawesome-5.14.0.min.css";
import "@/public/assets/css/nice-select.min.css";
import "@/public/assets/css/slick.min.css";
import "@/public/assets/css/style.css";
import "./globals.css";

/** google fonts */
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});

/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `;
export const metadata = {
  title: {
    template: "Bijith P N",
    default: "Bijith P N",
  },
  description:
    "I'm a skilled developer creating stunning, cross-platform mobile experiences. Dive into my portfolio to witness the fusion of beauty and functionality in each project. Let's turn ideas into seamless applications together!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <MetaTags />
      <SpeedInsights />
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
