
// get data
async function getData(link: string) {

  const portlink: string = 'http://localhost:8081/' + link

  const res = await fetch(portlink)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  return res.json()
  // return JSON.stringify(res)
}
// end get data
export default async function Home() {
  const datas = await getData('userGet/1')

  return (
    // profile card
    <div className="border-2 rounded-[10px] w-full" >
      {/* profile fieldTable */}
      <table className="mt-3 w-full">
        <thead>
          <tr>
            <th colSpan={1}><p className="text-base font-semibold leading-7 text-gray-900">Profile</p></th>
          </tr>
        </thead>
        {datas.User.map((data: {name_user: number; email_user: number; phone_user: number}) => (

        <tbody className="w-auto">
          <tr className="w-auto">
            <td className="pl-3 pt-6">Name</td>
            <td className=" pt-6 pl-72">{data.name_user}</td>
          </tr>
          <tr className="w-1 border-t-2 border-[#e5e7eb]">
            <td className="pl-3 pt-6" >Email</td>
            <td className=" pt-6 pl-72">{data.email_user}</td>
          </tr>
          <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
            <td className="pl-3 pt-6" >Phone</td>
            <td className="pt-6 pl-72">{data.phone_user}</td>
          </tr>
        </tbody>
              ))}
      </table>
      {datas.User.map((data: { id_user: number; name_user: number; password_user: number, email_user: number; phone_user: number; adress_user: string; point_user: number; isDelete_user: number }) => (
        <div>
          <div>
            {/* <span>{data.id_user}</span>
            <span>{data.name_user}</span>
            <span>{data.password_user}</span>
            <span>{data.email_user}</span>
            <span>{data.phone_user}</span>
            <span>{data.adress_user}</span>
            <span>{data.point_user}</span>
            <span>{data.isDelete_user}</span> */}
          </div>
        </div>
      ))}
    </div>
  );
}


