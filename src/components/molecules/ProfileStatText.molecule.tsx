import { FC } from "react";

interface ProfileStatTextProps { point?: number, showcase?: number, level?: number }
const ProfileStatText: FC<ProfileStatTextProps> = (props) => {
    const {
        point = 0,
        showcase = 0,
        level = 0

    } = props
    return (
        <div className="grid grid-cols-3 border-2 border-solid border-[#e5e7eb] rounded-[8px] bg-[#8fbc8f] ml-[24px] mr-[32px] mb-[16px] w-64">
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">point
                <div>
                    {point}
                </div>
            </div>
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">Showcase
                <div>
                    {showcase}
                </div>
            </div>
            <div className="h-[100px] text-center text-white pt-[40px] border-l-[1px] border-solid border-white text-sm ">Level
                <div>
                    {level}
                </div>

            </div>
        </div>
    )
}

export default ProfileStatText