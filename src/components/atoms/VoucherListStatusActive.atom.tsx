import { FC } from "react"

interface VoucherListActiveProps { label?: string }
const VoucherListActive: FC<VoucherListActiveProps> = (props) => {
    const {
        label = "ACTIVE"
    } = props
    return (
        <div className="pt-20 pl-32 w-72 float-right"><button type="button" disabled className="border-2 border-solid border-jonasBorder rounded-[15px] bg-green-900 text-white text-sm w-20 h-8 ml-7">{label}</button></div>
    )
}
export default VoucherListActive