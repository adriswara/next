'use client'

import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, compareAsc, sub } from "date-fns";


const Transaction = () => {

    type ownedTransactionType = {
        id_cart: number,
        id_item: number,
        id_user: number,
        item_quantity: number,
        total_price: string,
        item_created: string,
        name_product: number,
        type_product: string,
        point_reward: string,
        voucher_used: string
    }
    //
    const [startDate, setStartDate] = useState<Date>();
    console.log("datepicker : " + format(startDate ? startDate : "1970-01-01", "yyyy-MM-dd"))
    const day = format(startDate ? startDate : "01", "dd")
    const month = format(startDate ? startDate : "01", "MM")
    const year = format(startDate ? startDate : "1970", "yyyy")
    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const userData = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    // 
    const querryTransaction = 'showTransaction/' + user?.id_user
    const [ownedTransaction, setOwnedTransaction] = useState<ownedTransactionType[]>()
    const dataOwnedTransaction = async () => { GetData(querryTransaction).then((resp => { setOwnedTransaction(resp.transaction); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
    //
    // 
    const querryTransactionByDate = 'showTransactionByDate/' + user?.id_user + '/' + year + '/' + month + '/' + day
    const dataOwnedTransactionByDate = async () => { GetData(querryTransactionByDate).then((resp => { setOwnedTransaction(resp.transaction); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
    //
    const [total, setTotal] = useState<number>()


    
    
        const GenerateTotalPrice = () => {
       
            let total = 0;
            ownedTransaction?.map((data: ownedTransactionType) => {
                total += Number(data.total_price)
            })
        
            console.log("isi total : " + total)
            setTotal(total);
        }

    //
    useEffect(() => { userData() }, [])
    useEffect(() => { dataOwnedTransaction() }, [user])
    useEffect(() => { dataOwnedTransactionByDate() }, [startDate])
    useEffect(() => { GenerateTotalPrice() }, [ownedTransaction,startDate])





    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >

            <div className="mx-0 my-0">
                <div className="w-[312px] flex-col flex gap-5 justify-start">
                    <div className="border rounded-lg border-solid border-[#e5e7eb] w-screen mr-auto" >
                        <span className="ml-5"> Select Transaction Date : </span><DatePicker className="bg-green-200 border-gray-50 mt-5 ml-5 border rounded-lg text-center" selected={startDate} onChange={date => date && setStartDate(date)} /> <button onClick={() => { setStartDate(undefined); dataOwnedTransaction() }}> clear </button>
                        <table className="w-auto p-5 m-5 border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">ID</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Item Number</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Product Name</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">User</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Created</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Quantity</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Total Price</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Product Type</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Point Earned</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">ID Voucher Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ownedTransaction?.map((data: ownedTransactionType) => (
                                    <tr>
                                        <td className="p-2 text-left border-b border-solid">{data.id_cart}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.id_item}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.name_product}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.id_user}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.item_created}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.item_quantity}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.total_price}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.type_product}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.point_reward}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.voucher_used}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                        <span className=" mx-5 my-5 px-5 py-5 border rounded-lg text-center bg-gray-100 ">Grand Total : {total}</span>
                </div>
            </div>
        </div>
    );
}


export default Transaction;