import { FC } from "react"
import SignInButton from "../atoms/SignInButton.atom"
import ProfileButton from "../atoms/ProfileButton.atom"

interface ProfileAndLoginProps { logged: number| null }
const ProfileAndLogin: FC<ProfileAndLoginProps> = (props) => {
    const {
        logged = 0
    } = props
    return (
        <div>
            {logged == 0 ? <SignInButton></SignInButton> : logged == 1 ? <ProfileButton></ProfileButton> : <SignInButton></SignInButton>}
        </div>
    );
}
export default ProfileAndLogin