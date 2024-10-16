'use client'
import { FC, useCallback, useMemo } from "react";

import ItemCart from "../atoms/ItemCart.atom"
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { format, compareAsc, sub } from "date-fns";
import Modal from "../molecules/modalTest.molecule";
import VoucherOwned from "./VoucherOwned.organisms";
import ModalNotification from "../molecules/modalNotification.molecule";



interface ItemCartAvailableProps { }
const ItemCartAvailable: FC<ItemCartAvailableProps> = (props) => {
    const { } = props
    // 
    type cartDataType = {
        id_cart: number,
        id_user: number,
        item_quantity: number,
        total_price: number,
        name_product: string,
        description_product: string,
        price_product: number,
        point_reward: number
    }
    type ownedVoucherType = {
        id_voucher_ownership: number | "undefined",
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
        point: number
    }
    //get voucher
    const usedVoucherinfo = Cookies.get("voucheruse")
    const querrySelectedVoucher = 'getOwnedVoucherById/' + usedVoucherinfo
    const [selectedVoucher, setSelectedVoucher] = useState<ownedVoucherType>()
    const dataSelectedVoucher = async () => { GetData(querrySelectedVoucher).then((resp => { setSelectedVoucher(resp.VoucherOwned[0]); console.log(resp.VoucherOwned[0]) })).catch(resp => console.log(resp)) }
    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number, point_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    // 
    const queryCart = 'getCart/' + user?.id_user
    const [cart, setCart] = useState<cartDataType[]>()
    const dataCarts = async () => { GetData(queryCart).then((resp => { setCart(resp.Carts); console.log(resp.Carts) })).catch(resp => console.log(resp)) }
    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //
    console.log(selectedVoucher?.id_voucher_ownership)
    //
    const useVoucher = async () => {

        const data = {
            id_cart: Number(selectedVoucher?.id_voucher_ownership),
        };
        try {
            const response = await fetch('http://localhost:8081/paidVoucher/' + Number(selectedVoucher?.id_voucher_ownership), {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    // 
    const [itemGrandTotal, setTotal] = useState<number>()
    const router = useRouter()

    const GenerateCartList = () => {
        let subTotal = 0;
        let total = 0;
        cart?.map((data: cartDataType) => {
            subTotal += data.price_product * data.item_quantity
        })
        var tempDiscount = selectedVoucher?.discount ? selectedVoucher?.discount / 100 * subTotal : null
        console.log("isi subtotal : " + subTotal)
        console.log("isi discount : " + tempDiscount)

        total = tempDiscount ? subTotal - tempDiscount : subTotal;
        console.log("isi total : " + total)
        setTotal(total);
    }


    const resetCart = async () => {

        const data = {
            id_user: Number(user?.id_user),
        };
        try {
            const response = await fetch('http://localhost:8081/cartDel/' + user?.id_user, {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                router.push('/profile')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    // 
    const handlePurchase = async () => {
        // setShowModalNotif(true)
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

        console.log("id jenis voucher : "+selectedVoucher?.fK_voucher)




        const data = {
            id_user: Number(user?.id_user),
            item_created: format(jakartaTime, "yyyy-MM-dd hh:mm:ss"),
            voucher_used: Number(selectedVoucher?.fK_voucher)

        };
        try {
            const response = await fetch('http://localhost:8081/insertTransaction', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                Cookies.remove('voucheruse')
                handlePoint()
                useVoucher()
                resetCart()
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    const handlePoint = async () => {

        var rawPoint = itemGrandTotal && pointSetting?.transaction ? (itemGrandTotal / 100) / 100 * pointSetting?.transaction : null
        var newPoint = rawPoint && user?.point_user ? Number(rawPoint) + Number(user?.point_user) : null

        const data = {
            id_user: Number(user?.id_user),
            point_user: newPoint
        };
        try {
            const response = await fetch('http://localhost:8081/pointTransaction', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    //
    const removeVoucher = async () => {
        Cookies.remove('voucheruse')
        router.refresh()
    };
    //
    //
    const [showModal, setShowModal] = useState(false);
    const [showModalNotif, setShowModalNotif] = useState(false);


    useEffect(() => { GenerateCartList() }, [cart, usedVoucherinfo])
    useEffect(() => { dataCarts() }, [user, usedVoucherinfo])
    useEffect(() => { datas() }, [])
    useEffect(() => { dataSelectedVoucher() }, [usedVoucherinfo])
    useEffect(() => { dataPointSetting() }, [])


    return (
        <main className="flex-1 flex mt-16">
            <div className="flex-1 flex flex-col">
                <div className="wrapper">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row gap-6 container mx-auto">
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
                                                            <ItemCart onChange={(value) => { dataCarts() }} pointReward={data.point_reward} productId={data.id_cart} productName={String(data.name_product)} productDescription={"desc" + data.description_product} productQuantity={Number(data.item_quantity)} totalPrice={data.price_product}></ItemCart>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/4">
                                <div>
                                    <div className="rounded md:border bg-card text-card-foreground p-4 shadow">
                                        <div className="flex flex-col space-y-1.5">
                                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                                <div className="flex flex-row items-center gap-2">
                                                    <div>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        Shipping
                                                    </div>
                                                </div>
                                            </h3>
                                        </div>
                                        <div className="pt-0 mt-4 mb-6">
                                            <div className="flex flex-col text-sm">
                                                <div className="text-justify mt-2">
                                                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf:" data-state="closed">
                                                        Select Shipping
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                                <div className="flex flex-row items-center gap-2">
                                                    <div>
                                                        <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Layer_2" data-name="Layer 2">
                                                                <g id="invisible_box" data-name="invisible box">
                                                                    <rect width="48" height="48" fill="none" />
                                                                </g>
                                                                <g id="Layer_7" data-name="Layer 7">
                                                                    <path d="M43,7H38a2,2,0,0,0-1.4.6L34,10.2,31.4,7.6A2,2,0,0,0,30,7H5a2.9,2.9,0,0,0-3,3V38a3,3,0,0,0,3,3H30a2,2,0,0,0,1.4-.6L34,37.8l2.6,2.6A2,2,0,0,0,38,41h5a3,3,0,0,0,3-3V10A2.9,2.9,0,0,0,43,7ZM14,18a2,2,0,1,1-2,2A2,2,0,0,1,14,18Zm8,12a2,2,0,1,1,2-2A2,2,0,0,1,22,30Zm2.4-9.6-10,10a1.9,1.9,0,0,1-2.8,0,1.9,1.9,0,0,1,0-2.8l10-10a2,2,0,0,1,2.8,2.8ZM36,33a2,2,0,0,1-4,0V31a2,2,0,0,1,4,0Zm0-8a2,2,0,0,1-4,0V23a2,2,0,0,1,4,0Zm0-8a2,2,0,0,1-4,0V15a2,2,0,0,1,4,0Z" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        Voucher
                                                    </div>
                                                </div>
                                            </h3>
                                        </div>
                                        <div className="pt-0 mt-4">
                                            <div className="flex flex-col text-sm">
                                                <div className="text-justify mt-2">
                                                    {/* {selectedVoucher?.id_voucher_ownership != undefined ?   <button onClick={() => setShowModal(true)} className=" mb-6 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf:" data-state="closed"> Select Voucher </button>  : selectedVoucher?.id_voucher_ownership == undefined ? <p>You have no voucher available</p> : <p>You have no voucher available</p>} */}
                                                     <button onClick={() => setShowModal(true)} className=" mb-6 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf:" data-state="closed"> Select Voucher </button>
                                                    <div>
                                                        {selectedVoucher && selectedVoucher.id_voucher_ownership !== "undefined" ? <VoucherOwned hideButton={1} idVoucher={selectedVoucher.id_voucher_ownership} voucherType={selectedVoucher.voucherType} is_usable={selectedVoucher.is_usable} discount={selectedVoucher.discount} buyReq={selectedVoucher.buyReq} itemFree={selectedVoucher.itemFree} title={selectedVoucher.title} dateStart={selectedVoucher.dateStart} dateEnd={selectedVoucher.dateEnd} productRange={selectedVoucher.productRange} code={selectedVoucher.code} point={selectedVoucher.point}></VoucherOwned> : <></>}
                                                        {selectedVoucher && selectedVoucher.id_voucher_ownership !== "undefined" ? <button onClick={() => removeVoucher()} type="button" className="border-2 border-solid border-jonasBorder rounded-[15px] bg-red-800 text-white text-sm w-40 h-8 ml-7">Remove Voucher</button> : <></>}
                                                    </div>
                                                    <Modal show={showModal} onClose={() => setShowModal(false)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400">
                                        </div>
                                        <div className="flex flex-col space-y-1.5 mt-4">
                                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                                <div className="flex flex-row items-center gap-2">
                                                    <div>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        Payment
                                                    </div>
                                                </div>
                                            </h3>
                                        </div>
                                        <div className="pt-0 mt-4">
                                            <div className="flex flex-col text-xl">
                                                <div className="text-right font-semibold">
                                                    Total
                                                </div>
                                                <div className="text-right font-semibold">
                                                    Rp{itemGrandTotal}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 mt-5">
                                                <h3 className="font-bold">
                                                    TERMS OF USE
                                                </h3>
                                                <p>By clicking the "Continue to Payment button" you agree to our terms and condition</p>
                                                <a className="text-primary-500" href="https://jonasphoto.co.id/content/term-and-condition">TERMS OF USE</a>
                                                <button onClick={() => handlePurchase()} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white bg-black hover:bg-black/90 hover:text-white h-9 rounded-md px-3 w-full mt-4">
                                                    Continue to Payment
                                                </button>
                                                <ModalNotification show={showModalNotif} onClose={() => setShowModalNotif(false)} notificationType={2} message={"Transaction Complete, Please Wait.."}></ModalNotification>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ItemCartAvailable