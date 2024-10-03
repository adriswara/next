import { FC } from "react";

import Image from "next/image";



interface ItemProductProps { itemType: number, itemName: string, itemPrice: number, itemImage?: string }
const ItemProduct: FC<ItemProductProps> = (props) => {
    const {
        itemType = 0,
        itemName = "",
        itemPrice = 0,
        itemImage = "/product-default.png",
    } = props
    const link = "photoframe/detail/" + itemName
    return (
        <div className="">
            <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-1 -mt-px  pb-5 ml-5 mr-5 ">
                <a href={link}>
                    <Image src={itemImage} alt={itemImage} width={1000} height={1000} className="w-full object-cover object-center aspect-square" />
                </a>
                <div className=" -mb-5 h-12 pl-3 mt-3"><h6 className="text-gray-400 text-sm">{itemType}</h6></div>
                <div className=" -mb-5 h-12 pl-3"><h5 className="flex-1 font-bold line-clamp-2"><b>{itemName}</b></h5></div>
                <div className=" -mb-5 h-12 pl-3"><p className="">Start from</p></div>
                <div className=" -mb-5 h-12 pl-3"><p className="">Rp {itemPrice}</p></div>
            </div>
        </div>
    )
}

export default ItemProduct