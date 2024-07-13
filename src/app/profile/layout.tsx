'use client'
import ProfileXpBar from "@/components/molecules/ProfileXpBar.molecule";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Children } from "react";
import { Poppins } from "next/font/google";
import ProfileStatText from "@/components/molecules/ProfileStatText.molecule";
import ProfileName from "@/components/atoms/ProfileName.atom";
import ProfileLevel from "@/components/atoms/ProfileLevel.atom";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default function profile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  type logoutcolor = `rgb(${239},${77},${68})`
  const profileStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    paddingTop: 20,
    paddingBottom: 150
  }
  const navProfileCard = {
    border: "1px solid lightGrey",
    borderRadius: 10,
    marginLeft: 140,
    marginRight: 850,
    marginBottom: 0,
    paddingBottom: 0,
    height: 255,
    width: 312
  }
 
  const profilePicDiv = {
    marginLeft: " auto",
    marginRIght: "auto",
    borderRadius: "50%",
  }
  const profilePic = {
    borderRadius: "60%",
    margin: "auto"
  }
  const pathname = usePathname()
  return (
    <div style={profileStyle} className={poppins.className}>
      <div className="border rounded-lg border-solid border-[#e5e7eb] ml-[300px] mr-[850px] mb-auto pb-0 h-auto" >
        <ul>
          <li className={`link ${pathname === '/profile' ? 'bg-[#e5e7eb]  border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : ' border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Profile</Link></li>
          <li className={`link ${pathname === '/profile/changePassword' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/changePassword" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Change Password</Link></li>
          <li className={`link ${pathname === '/profile/transactionList' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/transactionList" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Transaction</Link></li>
          <li className={`link ${pathname === '/profile/voucherList' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/voucherList" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Voucher List</Link></li>
          <li className={`link ${pathname === '/profile/voucherRedeem' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/voucherRedeem" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Voucher Redeem</Link></li>
          <li className={`link ${pathname === '/profile/showcase' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/showcase" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem]">Showcase</Link></li>
          <li className={`link ${pathname === '/profile/logout' ? 'bg-[#e5e7eb] border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4 font-semibold' : 'border-t-2 border-[#e5e7eb] pl-0 pr-0 py-2 px-4'}`}><Link href="/profile/logout" className="text-sm pt[8px] pb[5px] pl-[10px] pr-[1rem] text-red-500 ">Logout</Link></li>
        </ul>
      </div>
      {children}
      {/* nav profile xp */}
      <div className="border border-[#e5e7eb] rounded-[10px] ml-[140px] mr-0 mt-0 w-[312px]">
        <div style={profilePicDiv}>
          <Image style={profilePic} src="/profilePicSq.jpg" width={128} height={13.84} alt="profilePicture" />
        </div>
        {/* profile Name */}
        <ProfileName></ProfileName>
        {/* profile level */}
        <ProfileLevel></ProfileLevel>
        {/* profile xp bar */}
        <ProfileXpBar></ProfileXpBar>
        {/* profile stat text */}
        <ProfileStatText></ProfileStatText>
      </div>
    </div>
  );
}


