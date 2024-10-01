import { Source_Sans_3 } from "next/font/google";

import React from "react"
import { FC } from "react"
const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const profileButton = {
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: -24,
    marginLeft: -50
}
interface ButtonProfileProps { label?: string }
const ProfileButton: FC<ButtonProfileProps> = (props) => {
    const { } = props
    return (
        <a className={sourceSans.className} style={profileButton} href="\profile"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg> </a>
    )
}
export default ProfileButton