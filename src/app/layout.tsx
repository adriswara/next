import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonas",
  description: "Web transaksi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageHeader = {
    marginLeft: 64,
  }
  const headerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
  }
  const headerContent = {
    marginTop: 15,

  }
  const loginButton = {
    backgroundColor: "#A4BB8D",
    borderRadius: 30,
    width: 144,
    height: 30
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav style={headerStyle}>
            <div style={imageHeader}>
              <a href="\">
                <Image src="/header.png" width={230} height={64} alt="Picture of the author"/>
              </a>
            </div>
            <div className={sourceSans.className} style={headerContent}><a href="\product">Product</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\showcase">Showcase</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\voucher">Voucher/Reward</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\profile">Profile</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\about">About</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\login"><button style={loginButton}>Login/Signup</button></a></div>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
