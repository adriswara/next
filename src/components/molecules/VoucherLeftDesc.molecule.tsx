import { FC } from "react"
import VoucherDiscountType1 from "../atoms/DiscountType1.atom"
import VoucherDiscountType2 from "../atoms/DiscountType2.atom"
import VoucherDiscountType3 from "../atoms/DiscountType3.atom"

interface VoucherDescDiscountProps {type:number, discount: number, buyReq: number, itemFree: number, title: string, dateStart: string, dateEnd: string, productRange: string, additional1?: string, additional2?: string, additionalDiscount?: string }
const VoucherDescDiscount: FC<VoucherDescDiscountProps> = (props) => {
    const {
        type = 0,
        discount = 0,
        buyReq = 0,
        itemFree = 0,
        title = "FOR X ORDER",
        dateStart = "01/01/1970 00:00",
        dateEnd = "01/01/1970 00:00",
        productRange = "For All Products",
        additional1 = "",
        additional2 = "",
        additionalDiscount = ""

    } = props
    return (
        <div className="ml-5">
            {/* huge discount text */}
            {type==1?<VoucherDiscountType1 discount={discount}></VoucherDiscountType1>:type==2?<VoucherDiscountType2 buyReq={buyReq} itemFree={itemFree}></VoucherDiscountType2>:<VoucherDiscountType3></VoucherDiscountType3>}
            {/* title range text */}
            <div className="text-sm">{title}</div>
            {/* date */}
            <div className="text-xs text-gray-500">{dateStart} - {dateEnd}</div>
            {/* item range range text */}
            <div className="text-xs text-gray-500">{productRange}</div>
            {/* additionals */}
            <div className="text-xs text-gray-500">{additional1}{additionalDiscount}{additional2}</div>
        </div>
    )
}
export default VoucherDescDiscount