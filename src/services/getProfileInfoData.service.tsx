"use client"
import { useEffect, useState } from "react"
import GetData from "./getData.service"
import Cookies from 'js-cookie'
import { format, addDays, addMonths, addYears, compareDesc, compareAsc } from "date-fns";

var expireTimeView

// get data
function GetProfileInfo() {
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: Number; name_user: number; email_user: number; phone_user: number; Last_login: string, point_user: number, first_transaction: string, last_showcase }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    //
    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number, login_daily: number, dayToExpire: number, monthToExpire: number, yearToExpire: number, modeToExpire: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //
    const [expireTime, setExpireTime] = useState<String>("")
    //
    const handleLoginBonus = async () => {
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


        const tempLastLogin = user?.Last_login ? new Date(user?.Last_login) : null;
        const lastLoginDate = Number(tempLastLogin?.getDate())
        const lastLoginMonth = Number(tempLastLogin?.getMonth()) + 1
        const lastLoginYear = Number(tempLastLogin?.getFullYear())

        const tanggalBaru = Number(format(jakartaTime, "dd"))
        const bulanBaru = Number(format(jakartaTime, "MM"))
        const tahunBaru = Number(format(jakartaTime, "yyyy"))



        // console.log("Handle Login Bonus: ")
        // console.log("Data Now Date: " + jakartaTime)
        // console.log("Isi User Struck : " + user)
        // console.log("User Data: " + user?.id_user + user?.name_user)
        // console.log("User Data last Login:" + user?.Last_login)
        // console.log("Temp Last Login: " + tempLastLogin)
        // console.log("Last Login Date: " + lastLoginDate)
        // console.log("Last Login Month: " + lastLoginMonth)
        // console.log("Last Login Year: " + lastLoginYear)

        // console.log("New Login Date : " + tanggalBaru)
        // console.log("New Login Month: " + bulanBaru)
        // console.log("New Login Year : " + tahunBaru)


        if (lastLoginDate >= tanggalBaru || user == undefined) {
            if (lastLoginMonth >= bulanBaru || user == undefined) {
                if (lastLoginYear >= tahunBaru || user == undefined) {
                    console.log("Logged In without daily bonus")
                    return
                }
            }
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
    const handlePointExpireCheck = async () => {
        var newPoint = 0;
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

        const mode = pointSetting?.modeToExpire
        const firstTransactionRaw = user?.first_transaction ? user?.first_transaction : ""
        const firstTransaction = new Date(firstTransactionRaw)

        const dayRange = pointSetting?.dayToExpire ? pointSetting?.dayToExpire : 0
        const monthRange = pointSetting?.monthToExpire ? pointSetting?.monthToExpire : 0
        const yearRange = pointSetting?.yearToExpire ? pointSetting?.yearToExpire : 0
        const expireByDate = mode == 1 || mode == 4 ? addDays(firstTransaction, Number(dayRange)) : firstTransaction
        const expireByMonth = mode == 2 || mode == 4 ? addMonths(expireByDate, Number(monthRange)) : expireByDate
        const expire = (mode == 3 || mode == 4 ? addYears(expireByMonth, Number(yearRange)) : expireByMonth)
        setExpireTime(expire+"")

        console.log(mode)
        console.log(firstTransactionRaw)
        console.log("First Transaction  : " + firstTransaction)
        console.log("First Transaction add days : " + addDays(firstTransaction, Number(dayRange)))
        console.log("Expire date : " + expireByDate)
        console.log("First Transaction add months : " + addMonths(expireByDate, Number(monthRange)))
        console.log("Expire month : " + expireByMonth)
        console.log("Expire Time : " + expire)
        console.log("Expire Time State : " + expireTime)

        console.log(expire + jakartaTime)
        console.log(compareAsc(expire, jakartaTime))
        const comparison = compareAsc(expire, jakartaTime);
        if(firstTransactionRaw.length === 0){
            console.log("masuk somehow if 1")
            return
         }
        if (comparison < 0 && mode != undefined) {
            console.log('point expired');
            handleResetTransactionDate()
            handleResetPoint()
            console.log("masuk somehow if 2")
        }
        else if (comparison > 0) {
            console.log('Point is secured');
            console.log("masuk somehow if 3")   
            return
            
        } else if (mode != undefined) {
            console.log('The day, point expired');
            handleResetTransactionDate()
            console.log("masuk somehow if 4")
        }
        console.log("End handle PEC")
       
    };
    //
    const handleResetTransactionDate = async () => {
        const data = {
            id_user: Number(user?.id_user),
        };
        try {
            const response = await fetch('http://localhost:8081/resetTransactionDate', {
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
     //
     const handleResetPoint = async () => {
        const data = {
            id_user: Number(user?.id_user),
            point_user: 0
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
            point_user: Number(newPoint)
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
    //

    //


    useEffect(() => { dataPointSetting() }, [user])
    useEffect(() => { handlePointExpireCheck() }, [user])
    useEffect(() => { handleLoginBonus() }, [user])

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
                        <td className="pl-3 py-6">Daily Login Date:</td>
                        <td className="pt-6 pl-72">{user?.Last_login}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
                        <td className="pl-3 py-6">Last Showcase Visited :</td>
                        <td className="pt-6 pl-72">{user?.last_showcase}</td>
                    </tr>
                    <tr className="w-1 border-t-2 border-solid border-[#e5e7eb]">
                        <td className="pl-3 py-6">Point Status :</td>
                        {/* <td className="pt-6 pl-72">{Number.isNaN(expireTime.getFullYear()) ? "Point Expired" : (expireTime ? "Valid until : " + `${expireTime.getFullYear()}-${expireTime.getMonth()}-${expireTime.getDate()}` : "")}</td> */}
                        <td className="pt-6 pl-72"> {expireTime == "Invalid Date" ? "Expired" : expireTime } </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )

}
export default GetProfileInfo