'use client'
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import CartEmpty from "@/components/atoms/EmptyCart.atom";
import ItemCartAvailable from "@/components/organisms/itemChartAvailable.organisms";

const Cart = () => {
    type cartDataType = {
        id_cart: number,
        id_user: number,
        item_quantity: number,
        total_price: number
    }

    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    // 
    const queryCart = 'getCart/' + 2
    const [cart, setCart] = useState<cartDataType[]>()
    const dataCarts = async () => { GetData(queryCart).then((resp => { setCart(resp.Carts) })).catch(resp => console.log(resp)) }
    // const dataCarts = async () => { GetData(queryCart).then((resp => { useEffect(()=>{setCart(resp.Carts);},[]) })).catch(resp => console.log(resp)) }

    useEffect(() => { dataCarts() }, [])
    // 


    return (
        <main className="flex-1 flex mt-16">

            {cart?.map((data: cartDataType) => (
                <p>{data.id_cart}</p>
            ))}

            {/* <CartEmpty></CartEmpty> */}
            <ItemCartAvailable></ItemCartAvailable>

        </main>
    );
};

export default Cart;    
