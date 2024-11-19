"use client"
import { usePathname } from 'next/navigation'
import { Literata, Poppins } from "next/font/google";
import GetCard from "@/services/getProfileCard.service";
import { useEffect, useState } from "react";
import GetData from "@/services/getData.service";
import ProfileHeader from "@/components/molecules/ProfileHeader.molecule";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


export default function profile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = String(usePathname())
  const [showModal, setShowModal] = useState(false);

  const queryMode = 'modeGet'
  const [mode, setMode] = useState<number>()
  const GetMode = async () => { GetData(queryMode).then((resp => { setMode(resp.presentMode) })).catch(resp => console.log(resp)) }
  //
  const [varMode, setVarMode] = useState<string>("")

  const GenerateVarMode = async () => {
    console.log("mode dalam if = " + mode)
    if (mode == 0) {
      console.log("masuk if")
      setVarMode("jonas")
    }
    else if (mode == 1) {
      console.log("masuk else if")

      setVarMode("sidang")
    }
    else {
      console.log("masuk if")
      setVarMode("sidang")
    }
  }

  const GenerateCartList = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
    setShowModal(false);
  }
  const concatedClass = `${poppins.className} flex pt-5 pb-36 container mx-auto items-start gap-5 `

  useEffect(() => { GenerateCartList() }, [pathname])
  useEffect(() => { GetMode() }, [])
  useEffect(() => { GenerateVarMode() }, [])
  useEffect(() => { console.log() })

  console.log("isi data mode " + mode)
 
  console.log("isi var mode " + varMode)


  return (
    <div className={concatedClass}>
      <div className="w-[312px] flex-col flex gap-5 justify-start">
        <ProfileHeader mode={mode} showModal={false}></ProfileHeader>
        {/* {pathname !== liteRoute && <ProfileHeader mode={mode} showModal={false}></ProfileHeader>} */}
        {/*  */}
        {/* {mode != undefined && pathname != liteRoute ? GetCard(mode) : GetCard(0)} */}
        {GetCard(0)}
        {/*  */}
      </div>
      {children}
    </div >
  );
}


