import GetData from "@/services/getData.service";


// end get data
export default async function Home() {
  const datas = await GetData('userGet/1')

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
    </div>
  );
}


