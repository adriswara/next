import Image from "next/image";
import { Children } from "react";

export default function profile({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
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
    marginBottom:230
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
    </div>
  );
}


