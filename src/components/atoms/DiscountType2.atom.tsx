import { FC } from "react"

interface VoucherDiscount2Props { discount: number }
const VoucherDiscountType2: FC<VoucherDiscount2Props> = (props) => {
    const {
        discount = 0
    } = props

    return (

        <div className="text-3xl">{discount}% OFF</div>
    )
}

export default VoucherDiscountType2