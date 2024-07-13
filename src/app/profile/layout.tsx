import Image from "next/image";
import Link from "next/link";
import { Children } from "react";

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

  const navProfileXP = {
    border: "1px solid lightGrey",
    borderRadius: 10,
    marginLeft: 140,
    marginRight: 0,
    marginTop: "0",
    width: "312px",
    position: ""
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

  const profileXpBarDesc = {
    textAlign: "center",
    marginBottom: "2%"
  }

  const profileStat = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    border: "1px solid lightGrey",
    borderRadius: 8,
    background: "darkSeaGreen",
    marginLeft: 24,
    marginRight: 32,
    marginBottom: 16    
  }

  const profileStatText = {
    height :100,
    textAlign:"center",
    color: "white",
    paddingTop: 40,
    borderLeft:"1px solid white",
    borderRight: "1px solid white"

  }


  return (
    <div style={profileStyle}>
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
      <div style={navProfileXP}>
        <div style={profilePicDiv}>
          <Image style={profilePic} src="/profilePicSq.jpg" width={128} height={13.84} alt="profilePicture" />
        </div>
        <div>
          <h1 style={profileName}>Ajon Doe</h1>
        </div>
        <div>
          <h1 style={profileName}>Level x</h1>
        </div>
        <div style={profileXpBar}><p style={profileXpBarField}>50%</p></div>
        <div style={profileXpBarDesc}>90 xp left to reach lvl 10</div>
        <div style={profileStat}>
          <div style={profileStatText}>point</div>
          <div style={profileStatText}>Showcase</div>
          <div style={profileStatText}>Level</div>
        </div>
      </div>
    </div>
  );
}


