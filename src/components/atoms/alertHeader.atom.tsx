import { FC } from "react"

interface AlertHeaderProps { label: string }
const AlertHeader: FC<AlertHeaderProps> = (props) => {
    const {
        label = "Alert"
    } = props
    return (
        <strong className="font-bold">{label}!</strong>
    )
}
export default AlertHeader