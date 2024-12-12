'use client'
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'



import ItemCartAvailable from "@/components/organisms/itemCartAvailable.organisms";
import CartEmpty from "@/components/atoms/EmptyCart.atom";

const Cart = () => {
    type cartDataType = {
        id_cart: number,
        id_user: number,
        item_quantity: number,
        total_price: number,
        name_product: string,
        description_product: string,
        price_product: number,
        item_type: number
    }
    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number, point_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    // 
    const queryCart = 'getCart/' + user?.id_user
    const [cart, setCart] = useState<cartDataType[]>()
    var dataCarts = async () => { }
    if (user?.id_user == undefined) {
        console.log("ID User Is empty, query cart wont load")
    }
    else {
        //
        dataCarts = async () => { GetData(queryCart).then((resp => { setCart(resp.Carts); console.log(resp.Carts) })).catch(resp => console.log(resp)) }
    }
    //
    useEffect(() => { datas() }, [])
    useEffect(() => { dataCarts() }, [user])
    return (
        <main className="flex-1 flex mt-16">
            {cart ? <ItemCartAvailable></ItemCartAvailable> : <CartEmpty title={"Your Cart is Empty"}></CartEmpty>}
        </main>
    );
};

export default Cart;    
