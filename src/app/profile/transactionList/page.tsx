'use client'
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned.organisms";
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import TransactionTable from "@/components/molecules/tableTransaksi.molecule";

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
    }

    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const userData = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    // 
    console.log("ini id user" + user?.id_user)
    const querryTransaction = 'showTransaction/' + user?.id_user
    const [ownedVoucher, setOwnedTransaction] = useState<ownedTransactionType[]>()
    const dataOwnedTransaction = async () => { GetData(querryTransaction).then((resp => { setOwnedTransaction(resp.transaction); console.log(resp.transaction) })).catch(resp => console.log(resp)) }
    // 
    useEffect(() => { userData() }, [])
    useEffect(() => { dataOwnedTransaction() }, [user])


    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >

            <div className="mx-0 my-0">
                <div className="w-[312px] flex-col flex gap-5 justify-start">
                    <div className="border rounded-lg border-solid border-[#e5e7eb] w-screen mr-auto" >
                        <table className="w-auto p-5 m-5 border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">ID</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Id Item</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Product Name</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">User</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Created</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Quantity</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Total Price</th>
                                    <th className="p-2 text-left border-b border-solid bg-['#f2f2f2']">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ownedVoucher?.map((data: ownedTransactionType) => (
                                    <tr>
                                        <td className="p-2 text-left border-b border-solid">{data.id_cart}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.id_item}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.name_product}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.id_user}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.item_created}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.item_quantity}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.total_price}</td>
                                        <td className="p-2 text-left border-b border-solid">{data.type_product}</td>
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


export default Transaction;