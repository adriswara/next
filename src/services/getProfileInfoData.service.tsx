"use client"
import { useEffect, useState } from "react"
import GetData from "./getData.service"

// get data
function GetProfileInfo() {
    const [user, setUser] = useState<{ name_user: number; email_user: number; phone_user: number }>()
    const datas = async () => { GetData('userGet/1').then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }

    useEffect(() => { datas() }, [])

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


                <tbody className="w-auto">
                    <tr className="w-auto">
                        <td className="pl-3 pt-6">Name</td>
                        <td className=" pt-6 pl-72">{user?.name_user}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-[#e5e7eb]">
                        <td className="pl-3 pt-6" >Email</td>
                        <td className=" pt-6 pl-72">{user?.email_user}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
                        <td className="pl-3 pt-6" >Phone</td>
                        <td className="pt-6 pl-72">{user?.phone_user}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )

}
export default GetProfileInfo