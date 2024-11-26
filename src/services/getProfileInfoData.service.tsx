"use client"
import { useEffect, useState } from "react"
import GetData from "./getData.service"
import Cookies from 'js-cookie'
import { format } from "date-fns";



// get data
function GetProfileInfo() {
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: Number; name_user: number; email_user: number; phone_user: number; Last_login: string, point_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    //
    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number, login_daily: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //

    const handleLoginBonus = async () => {
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


        const tempLastLogin = user?.Last_login ? new Date(user?.Last_login) : null;
        const lastLoginDate = Number(tempLastLogin?.getDate())

        const tanggalBaru = Number(format(jakartaTime, "dd"))

        // console.log("Handle Login Bonus: ")
        // console.log("Data Now Date: " + jakartaTime)
        // console.log("Isi User Struck : " + user)
        // console.log("User Data: " + user?.id_user + user?.name_user)
        // console.log("User Data last Login:" + user?.Last_login)
        // console.log("Temp Last Login: " + tempLastLogin)
        // console.log("Last Login Date: " + lastLoginDate)
        // console.log("New Login: " + tanggalBaru)

        if (lastLoginDate >= tanggalBaru || user == undefined) {
            console.log("Logged In without daily bonus")
            return
        }

        console.log("Daily login bonus triggered")

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
                handlePoint()
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
    //
    const handlePoint = async () => {
        console.log("HANDLE POINT")

        var rawPoint = pointSetting?.transaction ? 10 / 100 * pointSetting?.login_daily : null
        var newPoint = rawPoint && user?.point_user ? Number(rawPoint) + Number(user?.point_user) : null
        console.log("Isi raw point :" + rawPoint)
        if (rawPoint == undefined) {
            return
        }
        console.log("Isi new point :" + Number(rawPoint) + Number(user?.point_user))
        console.log("Hasil :" + newPoint)
        const data = {
            id_user: Number(user?.id_user),
            point_user: newPoint
        };
        try {
            const response = await fetch('http://localhost:8081/pointTransaction', {
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


    useEffect(() => { handleLoginBonus() }, [user])
    useEffect(() => { dataPointSetting() }, [user])

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
                    <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
                        <td className="pl-3 py-6">Date:</td>
                        <td className="pt-6 pl-72">{user?.Last_login}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )

}
export default GetProfileInfo