import { FC } from "react";
import ProfileName from "../atoms/ProfileName.atom";
import ProfileStatText from "../molecules/ProfileStatText.molecule";
import ProfilePicCard from "../atoms/ProfilePicCard";

interface ProfileStatCardJonasProps { picname?: string, name: string, transaksi: number, point: number, voucher: number }
const ProfileStatCardJonas: FC<ProfileStatCardJonasProps> = (props) => {
    const {
        picname = "/profilePicSq.jpg",
        name = "Ajon Doe",
        transaksi = 0,
        point = 0,
        voucher = 0
    } = props
    return (

        
        < div className="border border-[#e5e7eb] rounded-[10px]  w-full relative" >
            {/* Display Pic */}
            <ProfilePicCard picname={picname}></ProfilePicCard>
            {/* profile Name */}
            <ProfileName name={name}></ProfileName>
          
            <ProfileStatText point={point} voucher={voucher} transaksi={transaksi}></ProfileStatText>
        </div >


    )
}

export default ProfileStatCardJonas