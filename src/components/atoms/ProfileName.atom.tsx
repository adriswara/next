import { FC } from "react"

interface ProfileNameProps { name: string }
const ProfileName: FC<ProfileNameProps> = (props) => {
    const { name = "Ajon Doe" } = props
    return (
        <div>
            <h1 className="m-auto text-center " >{name}</h1>
        </div>
    )
}
export default ProfileName