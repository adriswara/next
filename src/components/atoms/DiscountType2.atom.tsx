import { FC } from "react"

interface VoucherDiscount2Props { productReq?: number, bundles?: number }
const VoucherDiscountType2: FC<VoucherDiscount2Props> = (props) => {
    const {
        productReq = 0,
        bundles = 0
    } = props

    return (

        <div className="text-3xl"> BUY {productReq} GET {bundles} FREE</div>
    )
}

export default VoucherDiscountType2