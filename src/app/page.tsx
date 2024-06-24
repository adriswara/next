import Image from "next/image";

export default function Home() {
  type logoutcolor = `rgb(${239},${77},${68})`
  const profileStyle = {

    display: "grid",
    gridTemplateColumns: "auto auto",
    paddingTop: 20
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
        <table>
          <thead>
            <tr>
              <th colSpan={1}><p>Profile</p></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Name Field</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>emailfield@mail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+62812345678</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}


