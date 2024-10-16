import { FC } from "react"

interface VoucherDiscount3Props {name:string}
const VoucherDiscountType3: FC<VoucherDiscount3Props> = (props) => {
    const {
        name = ""
    } = props

    return (

        <div className="text-3xl">{name}</div>
    )
}

export default VoucherDiscountType3