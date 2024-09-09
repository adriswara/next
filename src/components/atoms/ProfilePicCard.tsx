import { FC } from "react"
import Image from "next/image";

interface ProfilePicCard { picname: string }
const ProfilePicCard: FC<ProfilePicCard> = (props) => {
    const {
        picname = "profilePicSq.jpg"
    } = props

    return (
        <div className="ml-auto mr-auto round-[50%]">
            <Image className="rounded-[60%] mx-auto my-auto" src={picname} width={128} height={13.84} alt="profilePicture" />
        </div>
    )
}

export default ProfilePicCard