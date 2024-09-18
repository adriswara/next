import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"
import VoucherListInvalid from "../atoms/VoucherListStatusError.atom"
import VoucherCodeCopyButton from "../atoms/VoucherCodeCopyButton"
import AlertHeader from "../atoms/alertHeader.atom"
import AlertBody from "../atoms/alertBody.atom"

interface AlertWarningProps { messageHeader: string, messageBody: string }
const AlertWarning: FC<AlertWarningProps> = (props) => {
    const {
        messageHeader = "Warning!",
        messageBody = "Login Warningfuly"
    } = props
    return (
        <div>
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                <AlertHeader label={messageHeader}></AlertHeader>
                <AlertBody label={messageBody}></AlertBody>
            </div>
        </div>
    )
}
export default AlertWarning