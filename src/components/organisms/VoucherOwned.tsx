import { FC } from "react";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";
import VoucherRightDescCodeStatus from "../molecules/VoucherRightDesc.molecule";

interface VoucherOwnedProps { voucherType: number, voucherStatus: number }
const VoucherOwned: FC<VoucherOwnedProps> = (props) => {
    const {
        voucherType = 0,
        voucherStatus = 0,
    } = props
    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
            {/* left voucher section*/}
            <VoucherDescDiscount type={voucherType}></VoucherDescDiscount>
            {/* right voucher section*/}
            <VoucherRightDescCodeStatus status={voucherStatus}></VoucherRightDescCodeStatus>
        </div>
    )
}

export default VoucherOwned