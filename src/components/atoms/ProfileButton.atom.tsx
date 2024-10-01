import { Source_Sans_3 } from "next/font/google";

import React from "react"
import { FC } from "react"
const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const classAtribute = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-auto pt-4 pb-4 -mr-6 -ml-12 rounded-full";

interface ButtonProfileProps { label?: string }
const ProfileButton: FC<ButtonProfileProps> = (props) => {
    const { } = props
    return (
        <a className={`${sourceSans.className + " " + classAtribute}`} href="\profile"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg> </a>
    )
}
export default ProfileButton