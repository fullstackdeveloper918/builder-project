import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux-setup/Providers";
import { store } from "@/redux-setup/store";
import SideBar from "./../components/SideBar";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export const metadata: Metadata = {
  title: "Ethical swag",
  description: "Buy sustainable products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={dmSans.className}>
          {/* <section className="flex justify-between"> */}
          {/* <SideBar /> */}
          {children}
          {/* </section> */}
        </body>
      </html>
    </Providers>
  );
}
