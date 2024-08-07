import { FC } from "react"

interface VoucherCodeCopyButton { }
const VoucherCodeCopyButton: FC<VoucherCodeCopyButton> = (props) => {
    const {
    } = props
    return (
        <div className="text-sm grid grid-cols-2 w-12 mr-0">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                <title>copy-line</title>
                <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
            <p>Copy</p>
        </div>)
}
export default VoucherCodeCopyButton