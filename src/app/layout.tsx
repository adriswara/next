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
              <Image
                src="/header.png"
                width={230}
                height={64}
                alt="Picture of the author"
              />
            </div>
            <div className={sourceSans.className} style={headerContent}><button>Product</button></div>
            <div className={sourceSans.className} style={headerContent}><button>Showcase</button></div>
            <div className={sourceSans.className} style={headerContent}><button>Voucher/Reward</button></div>
            <div className={sourceSans.className} style={headerContent}><button>Profile</button></div>
            <div className={sourceSans.className} style={headerContent}><button>About</button></div>
            <div className={sourceSans.className} style={headerContent}><button style={loginButton}>Login/Signup</button></div>
          </nav>
        </section>
        {children}
      </body>
    </html>
  );
}
