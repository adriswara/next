import { FC } from "react"

interface FooterMidRIghtProps { label: string }
const FooterMidRight: FC<FooterMidRIghtProps> = (props) => {
    const {
        label = ""
    } = props

    return (
        <div><h1 className="mt-3">{label}</h1></div>
    )
}

export default FooterMidRight