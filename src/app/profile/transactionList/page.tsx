'use client'

import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import ModalNotification from "@/components/molecules/modalNotification.molecule";


const Transaction = () => {

    type ownedTransactionType = {
        id_cart: number,
        id_item: number,
        id_user: number,
        item_quantity: number,
        total_price: number,
        item_created: string,
        name_product: number,
        type_product: number,
        point_reward: string,
        voucher_used: string,
        discount_voucher: number,
        title: string,
        itemFree: number
    }

    type ownedVoucherType = {
        id_voucher_ownership: number,
        fk_user: number,
        fK_voucher: number,
        is_usable: number,
        name_product: string,
        description_product: string,
        price_product: number,
        title: string,
        voucherType: number,
        price: number,
        discount: number,
        buyReq: number,
        itemFree: number,
        dateStart: string,
        dateEnd: string,
        productRace: string,
        code: string,
        productRange: string,
        Point: number
    }


    //
    const [startDate, setStartDate] = useState<Date>();
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
    const querryVoucher = 'ownedVoucher/' + user?.id_user
    const [ownedVoucher, setOwnedVoucher] = useState<ownedVoucherType[]>()
    const dataOwnedVouchers = async () => { GetData(querryVoucher).then((resp => { setOwnedVoucher(resp.voucher_ownership); console.log(resp.voucher_ownership) })).catch(resp => console.log(resp)) }
    // 
    const querryTransactionByDate = 'showTransactionByDate/' + user?.id_user + '/' + year + '/' + month + '/' + day
    const dataOwnedTransactionByDate = async () => { GetData(querryTransactionByDate).then((resp => { setOwnedTransaction(resp.transaction); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
    //
    const [total, setTotal] = useState<number | null>()
    const [showModalNotif, setShowModalNotif] = useState(false);



    const GenerateTotalPrice = () => {

        let total = 0;
        ownedTransaction?.map((data: ownedTransactionType) => {
            total += Number(data.total_price)
        })

        setTotal(total);
    }

    //
    useEffect(() => { userData() }, [])
    useEffect(() => { dataOwnedTransaction() }, [user])
    useEffect(() => { dataOwnedVouchers() }, [user])
    useEffect(() => { dataOwnedTransactionByDate() }, [startDate])
    useEffect(() => { GenerateTotalPrice() }, [ownedTransaction, startDate])

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            <div className="mx-0 my-0">
                <div className="w-[312px] flex-col flex gap-5 justify-start">
                    <div className="border rounded-lg border-solid border-[#e5e7eb] mr-auto inline-block overflow-scroll whitespace-nowrap w-[385%]">
                        <span className="ml-5"> Select Transaction Date : </span><DatePicker className="bg-green-200 border-gray-50 mt-5 ml-5 border rounded-lg text-center" selected={startDate} onChange={date => date && setStartDate(date)} /> <button onClick={() => { setStartDate(undefined); dataOwnedTransaction() }}> clear </button>
                        <table className="w-auto p-5 m-5 border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Product Name</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">(x Qty)</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Created</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Voucher Used</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Product Type</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Item Discounted</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Point Earned</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Total Price</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Discount</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ownedTransaction?.map((data: ownedTransactionType) => (
                                    <tr>
                                        <td className="p-2 text-left border-b border-solid">{data.name_product}</td>
                                        <td className="p-2 text-left border-b border-solid">(x) {data.item_quantity}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.item_created}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.title}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.type_product == 1 ? "Frame" : (data.type_product == 2 ? "Print" : (data.type_product == 3 ? "Studio" : "INVALID DATA"))}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.itemFree == -1 ? "All Item" : (data.itemFree == 0 ? "No Discount" : (data.itemFree == 1 ? "Frame" : (data.itemFree == 2 ? "Print" : (data.type_product == 3 ? "Studio" : "INVALID DATA"))))}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.point_reward}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.discount_voucher}%</td>
                                        <td className="p-2 text-left border-b border-solid">{data.total_price}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.type_product == data.itemFree ? data.total_price - (data.discount_voucher / 100 * data.total_price) : data.total_price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <span className=" mx-5 my-5 px-5 py-5 border rounded-lg text-center bg-gray-100 ">Grand Total : {total}</span>
                    <ModalNotification show={showModalNotif} onClose={() => setShowModalNotif(false)} notificationType={2} message={""}></ModalNotification>
                </div>
            </div>
        </div>
    );
}


export default Transaction;