import PasswordField from "@/components/molecules/PasswordField.molecule";
import GetData from "@/services/getData.service";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { useState } from "react";
const headersList = headers()
const pathname = headersList.get('x-pathname');
// 
type ownedTransactionType = {
   id_user: number,
   name_user: string, 
   password: string,
   email_user: string,
   phone_user: string,
   address_user: string,
   point_user: number,
   totalXpUser: number,
   showcase_user: number,
   level_user: number,
   display_user: string,
   isDelete_user: number,
   last_login: string,
   last_showcase: string
}
//
let userTemp = 0
const querryTransaction = 'userGet/'
const [ownedTransaction, setOwnedTransaction] = useState<ownedTransactionType[]>()
const dataOwnedTransaction = async () => { GetData(querryTransaction).then((resp => { setOwnedTransaction(resp.transaction); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
//
export default function Home() {

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            <div className="mx-0 my-0">
                <div className="w-[312px] flex-col flex gap-5 justify-start">
                    <div className="border rounded-lg border-solid border-[#e5e7eb] mr-auto inline-block overflow-scroll whitespace-nowrap w-[385%]">
                        <span className="ml-5"> Select Transaction Date : </span>
                        <table className="w-auto p-5 m-5 border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Id</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Username</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Password</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Email</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Phone</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Address</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Point</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">TOtal user</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Showcase</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Level</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">is delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                    <td className="p-2 text-left border-b border-solid"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <span className=" mx-5 my-5 px-5 py-5 border rounded-lg text-center bg-gray-100 ">Grand Total : { }</span>
                </div>
            </div>
        </div>
    );
}


