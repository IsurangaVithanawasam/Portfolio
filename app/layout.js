import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import tailwindConfig from "@/tailwind.config.mjs";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "IsurangaVithanawasam",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:text-white dark:bg-[#11001F]`}
      >
        {children}
      </body>
    </html>
  );
}
