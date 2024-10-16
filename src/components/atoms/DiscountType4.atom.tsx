import { FC } from "react"

interface VoucherDiscount4Props {nominal : number}
const VoucherDiscountType4: FC<VoucherDiscount4Props> = (props) => {
    const {
        nominal = 0
    } = props

    return (

        <div className="text-3xl">Get {nominal} Point</div>
    )
}

export default VoucherDiscountType4