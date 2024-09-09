import { FC } from "react";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";
import VoucherRightDescCodeStatus from "../molecules/VoucherRightDesc.molecule";
import ProfileName from "../atoms/ProfileName.atom";
import ProfileLevel from "../atoms/ProfileLevel.atom";
import ProfileStatText from "../molecules/ProfileStatText.molecule";
import ProfileXpBar from "../molecules/ProfileXpBar.molecule";
import ProfilePicCard from "../atoms/ProfilePicCard";

interface ProfileStatCard { picname: string, name: string, level: number, percentage: number, xpLeft: number, nextLevel: number, point: number, showcase: number }
const ProfileStatCard: FC<ProfileStatCard> = (props) => {
    const {
        picname = "/profilePicSq.jpg",
        name = "Ajon Doe",
        level = 0,
        percentage = 50,
        xpLeft = 0,
        nextLevel = 0, 
        point = 0,
        showcase = 0
    } = props
    return (

        
        < div className="border border-[#e5e7eb] rounded-[10px]  w-full relative" >
            {/* Display Pic */}
            <ProfilePicCard picname={picname}></ProfilePicCard>
            {/* profile Name */}
            <ProfileName name={name}></ProfileName>
            {/* profile level */}
            <ProfileLevel level={level}></ProfileLevel>
            {/* profile xp bar */}
            <ProfileXpBar percentage={percentage} xpLeft={xpLeft} nextLevel={nextLevel}></ProfileXpBar>
            {/* profile stat text */}
            <ProfileStatText point={point} showcase={showcase} level={level}></ProfileStatText>
        </div >


    )
}

export default ProfileStatCard