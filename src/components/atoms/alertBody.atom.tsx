import { FC } from "react"

interface AlertBodyProps { label: string }
const AlertBody: FC<AlertBodyProps> = (props) => {
    const {
        label = "This is an alert"
    } = props
    return (
        <span className="block sm:inline">{label}</span>
    )
}
export default AlertBody