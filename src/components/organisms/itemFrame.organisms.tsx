import { FC } from "react";

import Image from "next/image";



interface ItemFrameProps { voucherType: number, price: number, discount: number, buyReq: number, itemFree: number, title: string, dateStart: string, dateEnd: string, productRange: string, code: string }
const ItemFrame: FC<ItemFrameProps> = (props) => {
    const {
        voucherType = 0,
        price = 0,
        discount = 0,
        buyReq = 0,
        itemFree = 0,
        title = "",
        dateStart = "",
        dateEnd = "",
        productRange = "",
        code = ""
    } = props
    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-1 -mt-px  pb-5 ml-5 mr-5 ">

            <Image src="/product-default.png" alt={""} width={1000} height={1000} className="w-full object-cover object-center aspect-square" />


            <div className=" -mb-5 h-12 pl-3"><p className="border-2 border-solid border-black rounded-2xl text-sm w-24 h-8 mt-2 pl-3 pt-1">{price} Points</p></div>
        </div>
    )
}

export default ItemFrame