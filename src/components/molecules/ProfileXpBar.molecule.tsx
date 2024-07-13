import { FC } from "react";

interface ProfileXpBarProps { percentage?: number }
const ProfileXpBar: FC<ProfileXpBarProps> = (props) => {
    const { percentage = 10 } = props
    return (
        <div className="overflow-hidden w-[90%] mx-auto rounded-[16px] bg-gray-600 relative" >
            <div className=" h-full bg-green-700 absolute top-0 left-0 w-[50%]"></div>
            <p className="w-full h-full text-center text-white relative">{percentage}%</p>
        </div>
    );
}
export default ProfileXpBar