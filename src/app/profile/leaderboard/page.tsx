"use client"
import PasswordField from "@/components/molecules/PasswordField.molecule";
import GetData from "@/services/getData.service";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
// const headersList = headers()
// const pathname = headersList.get('x-pathname');
// 
type userDataType = {
    Id: number,
    Username: string,
    Email: string,
    Phone: string,
    Address: string,
    Point: number,
    totalXpUser: number,
    Total_Transaction_User: number
}
export default function Home() {
    //
    const querryUser = 'users'
    const [userData, setUserData] = useState<userDataType[]>()
    const dataUser = async () => { GetData(querryUser).then((resp => { setUserData(resp.User); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
    //
    const [convertionRate, setconvertionRate] = useState<number>()
    //


    useEffect(() => { dataUser() }, [])


    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            <div className="mx-0 my-0">
                <div className="w-[312px] flex-col flex gap-5 justify-start">
                    <div className="border rounded-lg border-solid border-[#e5e7eb] mr-auto inline-block overflow-scroll whitespace-nowrap w-[385%]">
                        <table className="w-auto p-5 m-5 border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Username</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Email</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Phone</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Address</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Point</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Transaction</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Total Score</th>


                                </tr>
                            </thead>
                            <tbody>
                                {userData?.map((data: userDataType) => (
                                    <tr>
                                        <td className="p-2 text-left border-b border-solid">{data.Username}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Email}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Phone}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Address}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Point}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Total_Transaction_User}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.Total_Transaction_User * 10 + data.Point}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


