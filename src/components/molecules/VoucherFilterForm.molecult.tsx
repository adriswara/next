import { FC } from "react"

interface VoucherFilterProps {label?: string}
const VoucherFilterForm: FC<VoucherFilterProps> = (props) => {
    const {label =""} = props
    return (
        <div className=" grid grid-cols-3 mt-2">
            {label}
            {/* voucher nav search */}
            <label className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 w-72 h-10 ml-5">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-3">
                    <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>
                </svg>
                <input type="text" name="" placeholder="Cari Voucher" className="h-9" />
            </label>
            {/* selection jenis voucher */}
            <select name="" id="" className="border-2 border-solid border-jonasBorder rounded[5px] bg-white mr-5 pl-3 pr-3 ">
                <option value="" disabled selected>Jenis Voucher</option>
                <option value=""></option>
                <option value=""></option>
            </select>
            {/* selection date voucher */}
            <select name="" id="" className="border-2 border-solid border-jonasBorder rounded[5px] bg-white mr-5 pl-3 pr-3 ">
                <option value="" disabled selected>Recent</option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    )
}
export default VoucherFilterForm