import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"
import VoucherListInvalid from "../atoms/VoucherListStatusError.atom"
import VoucherCodeCopyButton from "../atoms/VoucherCodeCopyButton"

interface VoucherRightDescCodeStatusProps { code: string, is_usable: number }
const VoucherRightDescCodeStatus: FC<VoucherRightDescCodeStatusProps> = (props) => {
    const {
        code = "Code: missing",
        is_usable = 0
    } = props
    return (
        <div>
            <div>
                {/* code div */}
                <div className="grid grid-cols-2">
                    {/* code */}
                    <div className="text-blue-800 text-sm ml-35 mr-0">Code: {code}</div>
                    {/* copy logo */}
                    <VoucherCodeCopyButton></VoucherCodeCopyButton>
                </div>
                {/* status active */}
                {is_usable == 1 ? <VoucherListActive></VoucherListActive> : is_usable == 2 ? <VoucherListNotActive></VoucherListNotActive> : <VoucherListInvalid></VoucherListInvalid>}
            </div>
        </div>
    )
}
export default VoucherRightDescCodeStatus