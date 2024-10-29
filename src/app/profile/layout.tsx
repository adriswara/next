"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Poppins } from "next/font/google";


import GetCard from "@/services/getProfileCard.service";
import ModalLoading from "@/components/molecules/modalLoading.molecule";
import { useEffect, useState } from "react";
import { count } from "console";
import GetData from "@/services/getData.service";

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
            <li className={`link ${pathname === '/profile' ? 'bg-[#e5e7eb]  border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : ' border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Profile</Link></li>
            <li className={`link ${pathname === '/profile/changePassword' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/changePassword" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Change Password</Link></li>
            <li className={`link ${pathname === '/profile/transactionList' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/transactionList" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Transaction</Link></li>
            <li className={`link ${pathname === '/profile/voucherList' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/voucherList" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Voucher List</Link></li>
            <li className={`link ${pathname === '/profile/voucherRedeem' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/voucherRedeem" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Voucher Redeem</Link></li>
            <li className={`link ${pathname === '/profile/showcase' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/showcase" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Instagram Showcase</Link></li>
            <li className={`link ${pathname === '/profile/logout' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold text-red-500' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 text-red-500'}`}><Link href="/profile/logout" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem] text-red-500 ">Logout</Link></li>
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


