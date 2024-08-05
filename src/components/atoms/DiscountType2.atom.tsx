import { FC } from "react"

interface VoucherDiscount2Props { buyReq: number, itemFree: number }
const VoucherDiscountType2: FC<VoucherDiscount2Props> = (props) => {
    const {
        buyReq = 0,
        itemFree = 0
    } = props

    return (

        <div className="text-3xl"> BUY {buyReq} GET {itemFree} FREE</div>
    )
}

export default VoucherDiscountType2