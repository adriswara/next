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


  // header
  const headerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    border: "2px solid lightgrey",

  }
  const imageHeader = {
    marginLeft: 130,
    paddingTop: 16
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
    marginBottom: 50
  }
  const footerDiv = {
    paddingLeft: 140,
    marginTop: 10
  }
  const footerDivShared = {
    marginTop: 10
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav style={headerStyle}>
            <div style={imageHeader}>
              <a href="\">
                <Image src="/header.png" width={128} height={13.84} alt="Picture of the author" />
              </a>
            </div>
            <div className={sourceSans.className} style={photoStudio}><a href="\product">Photo Studio</a></div>
            <div className={sourceSans.className} style={photoPrint}><a href="\showcase">Photo Print</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\voucher">Frame</a></div>
            <div className={sourceSans.className} style={checkoutButton}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> </div>
            <div className={sourceSans.className} style={profileButton}><a href="\login"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg> </a></div>
          </nav>
        </section>
        {children}
        <section>
          <div style={footerMain}>
            <div><h1 style={footerDiv}>Online Shoping Guide</h1></div>
            <div><h1 style={footerDivShared}>Store Locator</h1></div>
            <div><h1 style={footerDivShared}>About</h1></div>
            <div><h1 style={footerDiv}>Photo Studio Reservation</h1></div>
            <div><h1 style={footerDivShared}>Jonas Banda</h1></div>
            <div><h1 style={footerDivShared}>Jonas Photo</h1></div>
            <div><h1 style={footerDiv}>Photo Printing</h1></div>
            <div><h1 style={footerDivShared}>Jonas Buah Batu</h1></div>
            <div><h1 style={footerDivShared}>Term and Condition</h1></div>
            <div><h1 style={footerDiv}>Photo Frame</h1></div>
            <div><h1 style={footerDivShared}>Jonas Ciwalk</h1></div>
            <div><h1 style={footerDivShared}>Privacy Policy</h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Feslink</h1></div>
            <div><h1 style={footerDivShared}>FAQs</h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Jatinangor</h1></div>
            <div><h1 style={footerDivShared}>Official Account</h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Cimahi</h1></div>
            <div><h1 style={footerDivShared}>POSISI LOGO</h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas KBP</h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Summarecon Mall Serpong</h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Alam Sutera (Coming Soon)</h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}>Jonas Semarang</h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDivShared}></h1></div>
            <div><h1 style={footerDiv}>2024 Jonasphoto. All Rights reserved.</h1></div>
          </div>
        </section>
      </body>
    </html>
  );
}
