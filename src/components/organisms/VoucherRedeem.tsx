import { FC } from "react";
import RedeemButton from "../atoms/RedeemButton.atom";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";


interface VoucherRedeemProps { voucherType: number, price: number }
const VoucherRedeem: FC<VoucherRedeemProps> = (props) => {
    const {
        voucherType = 0,
        price = 0,
    } = props
    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
            {/* voucher left section */}
            <VoucherDescDiscount type={voucherType}></VoucherDescDiscount>
            {/* voucher right component */}
            <div>
                <div className="grid grid-cols-2">
                    {/* voucher right code leave it blank */}
                </div>
            </div>
            <div className="bg-gray-300 -mb-5 h-12 mt-3 pl-3"><p className="border-2 border-solid border-black rounded-2xl text-sm w-24 h-8 mt-2 pl-3 pt-1">{price} Points</p></div>
            <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
        </div>
    )
}

export default VoucherRedeem