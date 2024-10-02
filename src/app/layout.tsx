'use client'
import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import Footer from "@/components/molecules/Footer.molecule";
import { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { usePathname, useRouter } from "next/navigation";
import { createContext } from "react";
import ProfileAndLogin from "@/components/molecules/ProfileAndLogin.molecule";




const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Jonas",
//   description: "Web transaksi",
// };

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


  var isLogin = 1
  const router = useRouter()
  
  const tokenContext = createContext<string | null>(Cookies.get('token'));
  const pathname = usePathname()
  const [path, setPath] = useState<string | null>(pathname)
  const [logged, setLogged] = useState<number | null>(isLogin)
  var status = ""
  const token = useContext(tokenContext)
  useEffect(() => { setPath(pathname) }, [pathname])
  useEffect(() => {
    console.log(path)
    console.log("Token : " + token)
    console.log("token status"+!token && token == undefined)
    if (!token && token == undefined) {
      router.replace('/login') // If no token is found, redirect to login page   
      console.log("gaada token")
      status = "false"
      isLogin = 0
      setLogged(isLogin)
      console.log("islogin = " + isLogin)

      return
    }
    if (token != undefined) {
      isLogin = 1
      setLogged(isLogin)
    }
    console.log("islogin = " + isLogin)
  }, [token])



  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <div className="grid grid-cols-7 border-2 border-solid border-jonasBorder" style={headerStyle}>
            <div className="ml-72 pt-4">
              <Image src="/header.png" width={128} height={13.84} alt="Picture of the author" />
            </div>
            <div className={sourceSans.className} style={photoStudio}><a href="\photostudio">Photo Studio</a></div>
            <div className={sourceSans.className} style={photoPrint}><a href="\photoprint">Photo Print</a></div>
            <div className={sourceSans.className} style={headerContent}><a href="\photoframe">Frame</a></div>
            <div className={sourceSans.className} style={checkoutButton}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg> </div>
          
            <ProfileAndLogin logged={logged}></ProfileAndLogin>

          </div>
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
