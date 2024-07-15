import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"

interface VoucherRightDescCodeStatusProps { voucherCode?: string, status: number }
const VoucherRightDescCodeStatus: FC<VoucherRightDescCodeStatusProps> = (props) => {
    const {
        voucherCode = "Code: CODE_123sksdiof",
        status = 0
    } = props
    return (
        <div>
            <div>
                {/* code div */}
                <div className="grid grid-cols-2">
                    {/* code */}
                    <div className="text-blue-800 text-sm ml-35 mr-0">{voucherCode}</div>
                    {/* copy logo */}
                    <div className="text-sm grid grid-cols-2 w-12 mr-0">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                            <title>copy-line</title>
                            <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                            <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                        </svg>
                        <p>Copy</p>
                    </div>
                </div>
                {/* status active */}
                {status == 1 ? <VoucherListActive></VoucherListActive> : <VoucherListNotActive></VoucherListNotActive>}
            </div>
        </div>
    )
}
export default VoucherRightDescCodeStatus