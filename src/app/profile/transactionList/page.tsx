'use client'
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned.organisms";
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

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

            <div className="mx-5 my-5">

                <div>
                    <th>
                        <td>Id</td>
                        <td>Id Item</td>
                        <td>Product Name</td>
                        <td>User</td>
                        <td>Created</td>
                        <td>Quantity</td>
                        <td>Total Price</td>
                        <td>Type</td>
                    </th>
                    {ownedVoucher?.map((data: ownedTransactionType) => (
                        <tr>
                            <td>{data.id_cart}</td>
                            <td>{data.id_item}</td>
                            <td>{data.name_product}</td>
                            <td>{data.id_user}</td>
                            <td>{data.item_created}</td>
                            <td>{data.item_quantity}</td>
                            <td>{data.total_price}</td>
                            <td>{data.type_product}</td>
                        </tr>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Transaction;