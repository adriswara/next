import Image from "next/image";
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
    height: 255
  }

  const navProfileXP = {
    border: "1px solid lightGrey",
    borderRadius: 10,
    marginLeft: 140,
    marginRight: 850,
    marginTop: -200
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
    borderRadius: "50%"
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
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "auto",
    borderRadius: 15
    

  }
  const profileXpBarField = {
  
    background: "linear-gradient(90deg, violet 90%, grey 90%)",
    width: "auto",
    borderRadius: 5,
    textAlign:"center",
    color:"black",
    filter: "invert(100%)"
  }

  const profileXpBarProgress ={
    backgroundColor: "green",
    width: "auto",
    borderRadius: 5,
    textAlign:"center",
    position: "sticky"
  }


  return (
    <div style={profileStyle}>
      <div style={navProfileCard}>
        <ul>
          <li><a href="/profile"><p style={unselectedNavText}>Profile</p></a></li>
          <li style={navCardField}><a href="profile/changePassword"><p style={unselectedNavText}>Change Password</p></a></li>
          <li style={navCardField}><a href="profile/transactionList"><p style={unselectedNavText}>Transaction</p></a></li>
          <li style={navCardField}><a href="profile/voucherList/"><p style={unselectedNavText}>Voucher List</p></a></li>
          <li style={navCardField}><a href="profile/voucherRedeem/"><p style={unselectedNavText}>Voucher Redeem</p></a></li>
          <li style={navCardField}><a href="profile/showcase/"><p style={unselectedNavText}>Showcase</p></a></li>
          <li style={navCardField}><a href="profile/logout"><p style={logoutButton}>Logout</p></a></li>
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
        <div style={profileXpBar}><p style={profileXpBarField}>x%</p></div>
      </div>
    </div>
  );
}


