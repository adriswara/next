import { FC } from "react";
import ProfileName from "../atoms/ProfileName.atom";
import ProfileLevel from "../atoms/ProfileLevel.atom";
import ProfileStatText from "../molecules/ProfileStatText.molecule";
import ProfileXpBar from "../molecules/ProfileXpBar.molecule";
import ProfilePicCard from "../atoms/ProfilePicCard";
import ProfileStatTextSidang from "../molecules/ProfileStatTextSidang.molecule";

interface ProfileStatCardSidangProps {xp: number, picname?: string, name: string, level: number, percentage: number, xpLeft: number, nextLevel: number, point: number, transaksi: number }
const ProfileStatCardSidang: FC<ProfileStatCardSidangProps> = (props) => {
    const {
        picname = "/profilePicSq.jpg",
        name = "Ajon Doe",
        level = 0,
        percentage = 50,
        xpLeft = 0,
        nextLevel = 0, 
        point = 0,
        transaksi = 0,
        xp = 0
    } = props
    console.log("Mode Sidang")
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
            <ProfileStatTextSidang point={point} transaksi={transaksi} xp={xp}></ProfileStatTextSidang>
        </div >


    )
}

export default ProfileStatCardSidang