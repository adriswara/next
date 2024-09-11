import { FC } from "react";

import Image from "next/image";



interface ItemFrameProps { itemType: number, itemName: string, itemPrice: number, itemImage: string }
const ItemFrame: FC<ItemFrameProps> = (props) => {
    const {
        itemType = 1,
        itemName = "Some Product",
        itemPrice = 0,
        itemImage = "/product-default.png"
    } = props
    return (
        <div>
            <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-1 -mt-px  pb-5 ml-5 mr-5 ">

                <Image src={itemImage} alt={itemImage} width={1000} height={1000} className="w-full object-cover object-center aspect-square" />


                <div className=" -mb-5 h-12 pl-3 mt-3"><h6 className="text-gray-400 text-sm">{itemType}</h6></div>
                <div className=" -mb-5 h-12 pl-3 mb-1"><h5 className="flex-1 font-bold line-clamp-2"><b>{itemName}</b></h5></div>
                <div className=" -mb-5 h-12 pl-3"><p className="">Start from</p></div>
                <div className=" -mb-5 h-12 pl-3"><p className="">Rp {itemPrice}</p></div>
            </div>
        </div>
    )
}

export default ItemFrame