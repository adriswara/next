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



export default  function profile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
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
        </div>
        {/* nav profile xp */}

          <div className="border border-[#e5e7eb] rounded-[10px]  w-full relative">
            <div className="ml-auto mr-auto round-[50%]">
              <Image className="rounded-[60%] mx-auto my-auto" src="/profilePicSq.jpg" width={128} height={13.84} alt="profilePicture" />
            </div>
            {/* profile Name */}
            <ProfileName name={"Ajon Doe"}></ProfileName>
            {/* profile level */}
            <ProfileLevel></ProfileLevel>
            {/* profile xp bar */}
            <ProfileXpBar></ProfileXpBar>
            {/* profile stat text */}
            <ProfileStatText></ProfileStatText>
          </div>

      </div>
      {children}
    </div>
  );
}


