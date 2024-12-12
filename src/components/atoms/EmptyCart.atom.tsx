import { FC } from "react"
import Image from "next/image";

interface CartEmptyProps {title: string}
const CartEmpty: FC<CartEmptyProps> = (props) => {
    const {
        title = ""
    } = props

    return (
        <div className="flex-1 flex flex-col">
            <div className="wrapper">
                <div className="flex flex-col justify-center items-center h-2/3">

                    <Image loading="lazy" decoding="async" data-nimg="1" src={"/cart-empty.png"} alt={"empty cart"} width={300} height={300} className="object-contain bg-transparent" />

                    <h3 className="font-bold text-xl">{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty