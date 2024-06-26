import Image from "next/image";

export default function Home() {
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
    marginRight: 850
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

  const profileCard = {
    border: "1px solid lightGrey",
    borderRadius: 10,
    marginLeft: -825,
    marginRight: 145
  }

  const profileFieldTable = {
    marginLeft:10,
    marginRight:0,
    marginTop:10,
    marginBottom:0,
  }

  const profileTableTD = {
    paddingTop:25
  }
  const profileTableTD2 = {
    paddingTop:25,
    paddingLeft: 300
  }
  const profileTableTR ={
    borderTop:"1px solid lightGrey"
  }

  return (
    <div style={profileStyle}>
      <div style={navProfileCard}>
        <ul>
          <li><a href=""><p style={unselectedNavText}>Profile</p></a></li>
          <li style={navCardField}><a href=""><p style={unselectedNavText}>Change Password</p></a></li>
          <li style={navCardField}><a href=""><p style={unselectedNavText}>Transaction</p></a></li>
          <li style={navCardField}><a href=""><p style={unselectedNavText}>Voucher List</p></a></li>
          <li style={navCardField}><a href=""><p style={unselectedNavText}>Voucher Redeem</p></a></li>
          <li style={navCardField}><a href=""><p style={logoutButton}>Logout</p></a></li>
        </ul>
      </div>
      <div style={profileCard}>
        <table style={profileFieldTable}>
          <thead>
            <tr>
              <th colSpan={1}><p>Profile</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={profileTableTD}>Name</td>
              <td style={profileTableTD2}>Name Field</td>
            </tr>
            <tr style={profileTableTR}>
              <td style={profileTableTD}>Email</td>
              <td style={profileTableTD2}>emailfield@mail.com</td>
            </tr>
            <tr style={profileTableTR}>
              <td style={profileTableTD}>Phone</td>
              <td style={profileTableTD2}>+62812345678</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


