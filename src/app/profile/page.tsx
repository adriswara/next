import Image from "next/image";

export default function Home() {
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
  );
}


