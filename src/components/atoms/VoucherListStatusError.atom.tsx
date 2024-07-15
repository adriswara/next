import { FC } from "react"

interface VoucherListInvalidProps { label?: string }
const VoucherListInvalid: FC<VoucherListInvalidProps> = (props) => {
    const {
        label = "INVALID"
    } = props
    return (
        <div className="pt-20 pl-32 w-72 float-right"><button type="button" disabled className="border-2 border-solid border-jonasBorder rounded-[15px] bg-red-700 text-white text-sm w-32 h-8 ml-0">{label}</button></div>
    )
}
export default VoucherListInvalid