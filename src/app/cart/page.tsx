'use client'
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import CartEmpty from "@/components/atoms/EmptyCart.atom";
import ItemCartAvailable from "@/components/organisms/itemCartAvailable.organisms";

const Cart = () => {
    // 
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
    console.log("ini id user" + user?.id_user)
    const queryCart = 'getCart/' + user?.id_user
    const [cart, setCart] = useState<cartDataType[]>()
    const dataCarts = async () => { GetData(queryCart).then((resp => { setCart(resp.Carts) })).catch(resp => console.log(resp)) }
    useEffect(() => { dataCarts() }, [user])
    // 

    const [grandTotal, setGrandTotal] = useState<number | null | undefined>()

    const countGrandTotal = () => {
        var total:number=0;
        cart?.map((data: cartDataType) => {
            total+=Number(data.total_price)
            console.log(total)
        })
        setGrandTotal(total)
    }

    useEffect(() => { countGrandTotal() }, [cart])

    return (
        <main className="flex-1 flex mt-16">

            
            {/* {!cart ?
                <CartEmpty></CartEmpty> :
                <>
                    {cart?.map((data: cartDataType) => (
                        // <ul>{data.total_price}</ul>
                        // <ItemCartAvailable totalPrice={0} grandTotalPrice={0} productName={""} productDescription={""} productQuantity={0}></ItemCartAvailable>
                    ))}
                </>
            } */}

            <ItemCartAvailable totalPrice={0} grandTotalPrice={grandTotal} productName={""} productDescription={""} productQuantity={0}></ItemCartAvailable>
            {/* <p>{grandTotal}</p> */}
        </main>
    );
};

export default Cart;    
