import { FC } from "react"

interface VoucherDiscount1Props { discount?: number }
const VoucherDiscountType1: FC<VoucherDiscount1Props> = (props) => {
    const {
        discount = 0
    } = props

    return (

        <div className="text-3xl">{discount}% OFF</div>
    )
}

export default VoucherDiscountType1