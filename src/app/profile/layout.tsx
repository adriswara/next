import ProfileXpBar from "@/components/molecules/ProfileXpBar.molecule";
import Image from "next/image";
import Link from "next/link";
import { Children } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700","800"]
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

  const profileName = {
    margin: "auto",
    textAlign: "center"
  }

  const profileXpBar = {
    width: "90%",
    marginTop: "4%",
    marginBottom: "2%",
    marginLeft: "4%",
    marginRight: "auto",
    borderRadius: 15


  }
  const profileXpBarField = {

    background: "linear-gradient(90deg, violet 50%, grey 50%)",
    width: "auto",
    borderRadius: 5,
    textAlign: "center",
    color: "black",
    filter: "invert(100%)"
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
        <div>
          {/* profile Name */}
          <h1 className="m-auto text-center " >Ajon Doe</h1>
        </div>
        <div>
          {/* profile Name */}
          <h1 className="m-auto text-center " >Level x</h1>
        </div>
        {/* profile xp bar */}
        <ProfileXpBar></ProfileXpBar>
        {/* profile xp bar desc for levelup req */}
        <div className="text-center mb-1">90 xp left to reach lvl 10</div>
        {/* profile stat */}
        <div className="grid grid-cols-3 border-2 border-solid border-[#e5e7eb] rounded-[8px] bg-[#8fbc8f] ml-[24px] mr-[32px] mb-[16px]">
          {/* profile stat text */}
          <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white ">point</div>
          <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white ">Showcase</div>
          <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white ">Level</div>
        </div>
      </div>
    </div>
  );
}


