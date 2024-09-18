import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"
import VoucherListInvalid from "../atoms/VoucherListStatusError.atom"
import VoucherCodeCopyButton from "../atoms/VoucherCodeCopyButton"
import AlertHeader from "../atoms/alertHeader.atom"
import AlertBody from "../atoms/alertBody.atom"

interface AlertSucessProps { messageHeader: string, messageBody: string }
const AlertSucess: FC<AlertSucessProps> = (props) => {
    const {
        messageHeader = "Success!",
        messageBody = "Login Sucessfuly"
    } = props
    return (
        <div>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <AlertHeader label={messageHeader}></AlertHeader>
                <AlertBody label={messageBody}></AlertBody>
            </div>
        </div>
    )
}
export default AlertSucess