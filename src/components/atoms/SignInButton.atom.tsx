
import React from "react"
import { FC } from "react"

interface ButtonSignInProps { label?: string }
const SignInButton: FC<ButtonSignInProps> = (props) => {
    const {} = props
    return (
        <div><button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-auto pt-4 pb-4 -mr-6 -ml-12 rounded-full"><a href="/login">Login</a></button></div>
    )
}
export default SignInButton