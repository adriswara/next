import { FC, useEffect } from "react";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";
import VoucherRightDescCodeStatus from "../molecules/VoucherRightDesc.molecule";
import { format } from "date-fns";

interface VoucherOwnedProps {hideButton: number, idVoucher?: number, voucherType?: number, discount?: number, buyReq?: number, itemFree?: number, title?: string, dateStart?: string, dateEnd?: string, productRange?: string, isUsable?: number, code?: string, point: number }
const VoucherOwned: FC<VoucherOwnedProps> = (props) => {
    const {
        idVoucher = 0,
        voucherType = 0,
        discount = 0,
        buyReq = 0,
        itemFree = 0,
        title = "",
        dateStart = "",
        dateEnd = "",
        productRange = "",
        isUsable = 0,
        hideButton = 1,
        point = 0,
        code = "CODE_123sksdiof",
    } = props
    var statusable = isUsable;
    const handleLoginBonus = async () => {
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


        const templastDate =  new Date(dateEnd);
        const lastDate = Number(templastDate?.getDate())

        const tanggalBaru = Number(format(jakartaTime, "dd"))

       console.log("last "+lastDate)
       console.log("new "+tanggalBaru)

        if (lastDate >= tanggalBaru) {
            console.log("Voucher is usable")
            statusable = 1
            return
        }
        statusable = 0
        console.log("Statusable is 0"+ statusable)

    };
    useEffect(() => { handleLoginBonus() }, [])

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
            {/* left voucher section*/}
            <VoucherDescDiscount type={voucherType} discount={discount} buyReq={buyReq} itemFree={itemFree} title={title} dateStart={dateStart} dateEnd={dateEnd} productRange={productRange} point={point}></VoucherDescDiscount>
            {/* right voucher section*/}
            {/* {isUsable} */}
            <VoucherRightDescCodeStatus hideButton={hideButton} idVoucher={idVoucher} isUsable={isUsable} code={code}></VoucherRightDescCodeStatus>
        </div>
    )
}

export default VoucherOwned