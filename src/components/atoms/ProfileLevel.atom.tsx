import { FC } from "react"

interface ProfileLevelProps { level?: number }
const ProfileLevel: FC<ProfileLevelProps> = (props) => {
    const { level = 0 } = props
    return (
        <div>
            <h1 className="m-auto text-center " >Level {level}</h1>
        </div>
    )
}

export default ProfileLevel