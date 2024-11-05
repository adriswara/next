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
import GetData from "@/services/getData.service";
import Header from "@/components/molecules/Header.molecule";
import { log } from "console";




const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });



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

  // get user id from cookie
  const userinfo = Cookies.get('username')
  const query = 'userGet/' + userinfo
  const [user, setUser] = useState<{ id_user: number, name_user: string }>()
  var datas = async () => { }
  if (userinfo == null) {
    console.log("User id is null, user data wont load")
  }
  else {
    datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
  }
  // 

  const router = useRouter()
  const tokenContext = createContext<string | null>(Cookies.get('token'));
  const pathname = usePathname()
  const [path, setPath] = useState<string | null>(pathname)
  const [logged, setLogged] = useState<number | null>(isLogin)
  var status = ""
  const token = useContext(tokenContext)



  useEffect(() => { setPath(pathname) }, [pathname])
  useEffect(() => {

    if (!token && token == undefined) {
      router.replace('/login') // If no token is found, redirect to login page   
      status = "false"
      isLogin = 0
      setLogged(isLogin)
      return
    }
    if (token != undefined) {
      isLogin = 1
      setLogged(isLogin)
    }

  }, [token])
  useEffect(() => { datas() }, [token])

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header logged={logged}></Header>
        {/* header */}
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
