import { FC } from "react"
import VoucherDiscountType1 from "../atoms/DiscountType1.atom"
import VoucherDiscountType2 from "../atoms/DiscountType2.atom"

interface VoucherDescDiscountProps {type:number, discount?: number, service?: string, dateStart?: string, dateEnd?: string, products?: string, additional1?: string, additional2?: string, additionalDiscount?: number }
const VoucherDescDiscount: FC<VoucherDescDiscountProps> = (props) => {
    const {
        type = 0,
        service = "FOR X ORDER",
        dateStart = "01/01/1970 00:00",
        dateEnd = "01/01/1970 00:00",
        products = "For All Products",
        additional1 = "Combination: get",
        additional2 = "% Off When",
        additionalDiscount = 0

    } = props
    return (
        <div className="ml-5">
            {/* huge discount text */}
            {type==1?<VoucherDiscountType1></VoucherDiscountType1>:type==2?<VoucherDiscountType2></VoucherDiscountType2>:<p>discount error</p>}
            {/* service range text */}
            <div className="text-sm">{service}</div>
            {/* date */}
            <div className="text-xs text-gray-500">{dateStart} - {dateEnd}</div>
            {/* item range range text */}
            <div className="text-xs text-gray-500">{products}</div>
            {/* additionals */}
            <div className="text-xs text-gray-500">{additional1}{additionalDiscount}{additional2}</div>
        </div>
    )
}
export default VoucherDescDiscount