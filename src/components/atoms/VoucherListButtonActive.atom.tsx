import { FC } from "react"

interface VoucherButtonActiveProps { id_voucher?: number }
const VoucherButtonActive: FC<VoucherButtonActiveProps> = (props) => {
    const {
        id_voucher = 0
    } = props

    //
    const useVoucher = async () => {
        var now = new Date();
        var time = now.getTime();
        var minute = 1000 * 60
        var hour = minute * 60
        var expireTime = time + hour;
        now.setTime(expireTime);
        const expires = "expires=" + now.toUTCString();
        console.log("isi id voucher "+id_voucher)
        document.cookie = `voucheruse=${id_voucher}; ` + expires + "; path=/;";

    };
    //

    return (
        <div className="pt-20 pl-32 w-72 float-right"><button onClick={() => useVoucher()} type="button" className="border-2 border-solid border-jonasBorder rounded-[15px] bg-blue-900 text-white text-sm w-20 h-8 ml-7">Use</button></div>
    )
}
export default VoucherButtonActive