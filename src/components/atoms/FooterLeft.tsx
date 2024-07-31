import { FC } from "react"

interface FooterLeftProps { label: string }
const FooterLeft: FC<FooterLeftProps> = (props) => {
    const {
        label = ""
    } = props

    return (
        <div><h1 className="mt-3 pl-36">{label}</h1></div>
    )
}

export default FooterLeft