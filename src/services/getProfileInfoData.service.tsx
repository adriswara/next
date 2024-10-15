"use client"
import { useEffect, useState } from "react"
import GetData from "./getData.service"
import Cookies from 'js-cookie'
import { format, compareAsc, sub } from "date-fns";



// get data
function GetProfileInfo() {
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: Number; name_user: number; email_user: number; phone_user: number; Last_login: string }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }

    //

    const handleLoginBonus = async () => {
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

        console.log("username " + userinfo)
        console.log("isi user " + user?.Last_login)
        const tempLastLogin = user?.Last_login ? new Date(user?.Last_login) : null;
        const lastLoginDate = Number(tempLastLogin?.getDate())

        console.log("tanggal akhir " + Number(lastLoginDate))
        const tanggalBaru = Number(format(jakartaTime, "dd"))
        console.log("tanggal baru  " + Number(tanggalBaru))

        if (lastLoginDate >= tanggalBaru) {
            return
        }


        const data = {
            id_user: Number(user?.id_user),
            last_login: format(jakartaTime, "yyyy-MM-dd hh:mm:ss"),
        };
        try {
            const response = await fetch('http://localhost:8081/dailyloginCheck', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')

                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //


    useEffect(() => { datas() }, [])
    useEffect(() => { handleLoginBonus() }, [user?.id_user])

    return (
        // profile card
        <div className="border-2 rounded-[10px] w-full" >
            {/* profile fieldTable */}
            <table className="mt-4 w-full">
                <thead>
                    <tr className="mx-10">
                        <th colSpan={1} className="mx-10"><p className="w-full mx-10 text-base font-semibold leading-7 text-gray-900">Profile</p></th>
                    </tr>
                </thead>


                <tbody className="w-auto">
                    <tr className="w-auto">
                        <td className="pl-3 py-6">Name</td>
                        <td className="pt-6 pl-72">{user?.name_user}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-[#e5e7eb]">
                        <td className="pl-3 py-6" >Email</td>
                        <td className="pt-6 pl-72">{user?.email_user}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
                        <td className="pl-3 py-6">Phone</td>
                        <td className="pt-6 pl-72">{user?.phone_user}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )

}
export default GetProfileInfo