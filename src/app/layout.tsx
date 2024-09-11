import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import FooterMidRight from "@/components/atoms/FooterMidRight";
import FooterLeft from "@/components/atoms/FooterLeft";
import Footer from "@/components/molecules/Footer.molecule";


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


  // header
  const headerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    border: "2px solid lightgrey",

  }

  const headerContent = {
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 90,
    marginRight: 80
  }
  const photoStudio = {
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 350,
    marginRight: -160
  }
  const photoPrint = {
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 90,
    marginRight: -160
  }
  const checkoutButton = {
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: -24,
    marginLeft: 82
  }
  const profileButton = {
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: -24,
    marginLeft: -50
  }

  // footer

  const footerMain = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    borderTop: "1px solid lightgrey",
    marginBottom: 50,
    marginTop: 50
  }


  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className="grid grid-cols-7 border-2 border-solid border-jonasBorder" style={headerStyle}>
            <div className="ml-72 pt-4">
              <a href="\">
                <Image src="/header.png" width={128} height={13.84} alt="Picture of the author" />
              </a>
            </div>
            <div className={sourceSans.className} style={photoStudio}><a href="\">Photo Studio</a></div>
            <div className={sourceSans.className} style={photoPrint}><a href="\">Photo Print</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\photoframe">Frame</a></div>
            <div className={sourceSans.className} style={checkoutButton}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> </div>
            <div className={sourceSans.className} style={profileButton}><a href="\profile"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg> </a></div>
          </nav>
        </section>
        {children}
        <section>
          {/* footer */}

          <Footer></Footer>

          {/* end footer */}
        </section>
      </body>
    </html>
  );
}
