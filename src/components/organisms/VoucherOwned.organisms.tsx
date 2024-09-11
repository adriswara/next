import { FC } from "react";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";
import VoucherRightDescCodeStatus from "../molecules/VoucherRightDesc.molecule";

interface VoucherOwnedProps { voucherType: number, discount: number, buyReq:number, itemFree:number, title:string, dateStart:string, dateEnd:string, productRange:string, is_usable: number, code:string }
const VoucherOwned: FC<VoucherOwnedProps> = (props) => {
    const {
        voucherType = 0,
        discount =0,
        buyReq =0,
        itemFree=0,
        title="",
        dateStart="",
        dateEnd="",
        productRange="",
        is_usable = 0,
        code = "CODE_123sksdiof"
    } = props
    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
            {/* left voucher section*/}
            <VoucherDescDiscount type={voucherType} discount={discount} buyReq={buyReq} itemFree={itemFree} title={title} dateStart={dateStart} dateEnd={dateEnd} productRange={productRange}></VoucherDescDiscount>
            {/* right voucher section*/}
            <VoucherRightDescCodeStatus is_usable={is_usable} code={code}></VoucherRightDescCodeStatus>
        </div>
    )
}

export default VoucherOwned