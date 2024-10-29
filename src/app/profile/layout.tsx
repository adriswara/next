"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Poppins } from "next/font/google";


import GetCard from "@/services/getProfileCard.service";
import ModalLoading from "@/components/molecules/modalLoading.molecule";
import { useEffect, useState } from "react";
import { count } from "console";
import GetData from "@/services/getData.service";
import ProfileNavLink from "@/components/atoms/profileNavLink.atom";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


export default function profile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false);
  // onClick={() => }

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
  useEffect(() => { GenerateCartList() }, [pathname])
  useEffect(() => { GetMode() }, [])
  useEffect(() => { GenerateVarMode() }, [])

  console.log("isi data mode " + mode)
  console.log(mode == 0)
  console.log("isi var mode " + varMode)

  return (
    <div className={`${poppins.className} flex pt-5 pb-36 container mx-auto items-start gap-5 `}>
      <div className="w-[312px] flex-col flex gap-5 justify-start">
        <div className="border rounded-lg border-solid border-[#e5e7eb] h-auto" >
          <ul>
            <ProfileNavLink navigation={"/profile"} label={"Profile"} top={1}></ProfileNavLink>
            <ProfileNavLink navigation={"/profile/changePassword"} label={"Change Password"}></ProfileNavLink>
            <ProfileNavLink navigation={"/profile/transactionList"} label={"Transaction"}></ProfileNavLink>
            <ProfileNavLink navigation={"/profile/voucherList"} label={"Voucher List"}></ProfileNavLink>
            <ProfileNavLink navigation={"/profile/voucherRedeem"} label={"Voucher Redeem"}></ProfileNavLink>
            {mode == 1 ? <ProfileNavLink navigation={"/profile/leaderboard"} label={"Leaderboard"}></ProfileNavLink> : <></>}
            {mode == 1 ? <ProfileNavLink navigation={"/profile/performanceGraph"} label={"Performance Graph"}></ProfileNavLink> : <></>}
            <ProfileNavLink navigation={"/profile/showcase"} label={"Showcase"}></ProfileNavLink>
            <ProfileNavLink navigation={"/profile/logout"} label={"Logout"} bottom={1}></ProfileNavLink>
          </ul>
          <ModalLoading show={undefined} onClose={undefined}></ModalLoading>
        </div>
        {/*  */}
        {mode != undefined ? GetCard(mode) : GetCard(0)}
        {/*  */}
      </div>
      {children}
    </div>
  );
}


