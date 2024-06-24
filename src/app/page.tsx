import Image from "next/image";

export default function Home() {
  const profileStyle = {

    display: "grid",
    gridTemplateColumns: "auto auto",
    paddingTop: 20
  }

  const navProfileCard = {
    border: "2px solid lightGrey",
    borderRadius: 5,
    marginLeft: 140,
    marginRight: 510
  }

  const unselectedNavText = {
    fontSize: "875 rem",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: "1 rem",
    width :"100%"

  }

  const profileCard = {
    border: "2px solid lightGrey",
    borderRadius: 5,
    marginLeft: -488  ,
    marginRight: 400
  }

  return (
    <div style={profileStyle}>
      <div style={navProfileCard}>
        <ul>
          <li><a href=""><p style={unselectedNavText}>Profile</p></a></li>
          <li><a href=""><p style={unselectedNavText}>Change Password</p></a></li>
          <li><a href=""><p style={unselectedNavText}>Transaction</p></a></li>
          <li><a href=""><p style={unselectedNavText}>Logout</p></a></li>
        </ul>
      </div>
      <div style={profileCard}>
        <tr>
          <th><p>Profile</p></th>
          <th></th>
        </tr>
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
      </div>
    </div>
  );
}


