'use client'
import { FC } from "react"
import ItemCart from "../atoms/ItemCart.atom"
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

interface CartLeftSectionProps { }
const CartLeftSection: FC<CartLeftSectionProps> = (props) => {
    const { } = props
    // 
    type cartDataType = {
        id_cart: number,
        id_user: number,
        item_quantity: number,
        total_price: number,
        name_product: string,
        description_product: string,
        point_reward: number
    }
    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    // 
    const queryCart = 'getCart/' + user?.id_user
    const [cart, setCart] = useState<cartDataType[]>()
    const dataCarts = async () => { GetData(queryCart).then((resp => { setCart(resp.Carts) })).catch(resp => console.log(resp)) }
    useEffect(() => { dataCarts() }, [user])
    // 
    return (
        <div className="basis-3/4">
            <div>
                <div className="rounded md:border bg-card text-card-foreground p-4 shadow">
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-center gap-2">
                                    <div>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        Cart
                                    </div>
                                </div>
                                <div className="text-right items-center">
                                    <a href="\photostudio">
                                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                </path>
                                            </svg>
                                            Add More
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className="pt-0 mt-4">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&amp;_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Product Name
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-center">
                                            Qty
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">

                                    {cart?.map((data: cartDataType) => (
                                        // <ul>{data.total_price}</ul>
                                        <ItemCart productPoint={Number(data.point_reward ? data.point_reward : 0)} productName={String(data.name_product)} productDescription={"desc" + data.description_product} productQuantity={data.item_quantity} totalPrice={data.total_price} productId={data.id_cart} pointReward={0}></ItemCart>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartLeftSection