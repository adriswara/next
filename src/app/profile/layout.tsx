import ProfileXpBar from "@/components/molecules/ProfileXpBar.molecule";

import Image from "next/image";
import Link from "next/link";
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


  const navCardField = {
    borderTop: "1px solid lightGrey",
    paddingLeft: 0,
    paddingRight: 0
  }

  const unselectedNavText = {
    fontSize: "875 rem",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: "1 rem",
    width: "100%"
  }

  const logoutButton = {
    color: "orange",
    fontSize: "875 rem",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: "1 rem",
    width: "100%"
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

  return (
    <div style={profileStyle} className={poppins.className}>
      <div style={navProfileCard}>
        <ul>
          <li><Link href="/profile"><p style={unselectedNavText}>Profile</p></Link></li>
          <li style={navCardField}><Link href="/profile/changePassword"><p style={unselectedNavText}>Change Password</p></Link></li>
          <li style={navCardField}><Link href="/profile/transactionList"><p style={unselectedNavText}>Transaction</p></Link></li>
          <li style={navCardField}><Link href="/profile/voucherList"><p style={unselectedNavText}>Voucher List</p></Link></li>
          <li style={navCardField}><Link href="/profile/voucherRedeem"><p style={unselectedNavText}>Voucher Redeem</p></Link></li>
          <li style={navCardField}><Link href="/profile/showcase"><p style={unselectedNavText}>Showcase</p></Link></li>
          <li style={navCardField}><Link href="/profile/logout"><p style={logoutButton}>Logout</p></Link></li>
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


