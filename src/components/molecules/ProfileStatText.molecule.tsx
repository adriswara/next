import { FC } from "react";

interface ProfileStatTextProps { point: number, voucher: number, transaksi: number }
const ProfileStatText: FC<ProfileStatTextProps> = (props) => {
    const {
        point = 0,
        voucher = 0,
        transaksi = 0

    } = props
    return (
        <div className="grid grid-cols-3 border-2 border-solid border-[#e5e7eb] rounded-[8px] bg-[#8fbc8f] ml-[24px] mr-[32px] mb-[16px] w-64">
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">Point
                <div>
                    {point}
                </div>
            </div>
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">Voucher
                <div>
                    {voucher}
                </div>
            </div>
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">Transaksi
                <div>
                    {transaksi}
                </div>

            </div>
        </div>
    )
}

export default ProfileStatText