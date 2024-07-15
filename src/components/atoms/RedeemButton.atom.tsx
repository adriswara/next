import { FC } from "react"

interface ButtonRedeemProps { label?: string }
const RedeemButton:FC<ButtonRedeemProps> = (props) => {
    const { label = "Redeem"} = props
    return (
    <button className="border-2 border-solid border-slateBlue rounded-[15px] bg-slateBlue text-white text-sm w-24 h-8 mr-11 float-right mt-2" >{label}</button>
    )
}
export default RedeemButton