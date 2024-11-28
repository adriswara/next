import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"
import VoucherListInvalid from "../atoms/VoucherListStatusError.atom"
import VoucherCodeCopyButton from "../atoms/VoucherCodeCopyButton"
import VoucherButtonActive from "../atoms/VoucherListButtonActive.atom"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


interface VoucherRightDescCodeStatusProps { hideButton: number, idVoucher: number, code: string, isUsable: number }
const VoucherRightDescCodeStatus: FC<VoucherRightDescCodeStatusProps> = (props) => {
    const {
        code = "Code: missing",
        isUsable = 0,
        idVoucher = 0,
        hideButton = 1
    } = props
    const pathname = usePathname()
    const [path, setPath] = useState<string | null>(pathname)
    useEffect(() => { setPath(pathname) }, [pathname])

    return (
        <div>
            <div>
                {/* code div */}
                <div className="grid grid-cols-2">
                    {/* code */}
                    <div className="text-blue-800 text-sm ml-35 mr-0">Code: {code}</div>
                    {/* copy logo */}
                    {/* <VoucherCodeCopyButton></VoucherCodeCopyButton> */}
                </div>
                {/* status active */}
                {isUsable == 1 ? <VoucherListActive></VoucherListActive> : isUsable == 2 ? <VoucherListNotActive></VoucherListNotActive> : <VoucherListInvalid></VoucherListInvalid>}
                {/* {isUsable} */}
                {isUsable == 1 && path == "/cart" && hideButton == 0 ? <VoucherButtonActive id_voucher={idVoucher} isHidden={hideButton}></VoucherButtonActive> : <></>}
            </div>
        </div>
    )
}
export default VoucherRightDescCodeStatus