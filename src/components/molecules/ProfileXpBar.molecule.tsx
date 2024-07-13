import { FC } from "react";

interface ProfileXpBarProps { percentage?: number, xpLeft?: number, nextLevel?: number }
const ProfileXpBar: FC<ProfileXpBarProps> = (props) => {
    const {
        percentage = 10,
        xpLeft = 10,
        nextLevel = 11
    } = props
    return (
        <div>
            <div className="overflow-hidden w-[90%] mx-auto rounded-[16px] bg-gray-600 relative" >
                <div className=" h-full bg-green-700 absolute top-0 left-0 w-[50%]"></div>
                <p className="w-full h-full text-center text-white relative">{percentage}%</p>
            </div>
            <div className="text-center mb-1">{xpLeft} xp left to reach lvl {nextLevel}</div>
        </div>
    );
}
export default ProfileXpBar