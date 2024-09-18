import { FC } from "react"
import VoucherListActive from "../atoms/VoucherListStatusActive.atom"
import VoucherListNotActive from "../atoms/VoucherListStatusNotActive.atom"
import VoucherListInvalid from "../atoms/VoucherListStatusError.atom"
import VoucherCodeCopyButton from "../atoms/VoucherCodeCopyButton"
import AlertHeader from "../atoms/alertHeader.atom"
import AlertBody from "../atoms/alertBody.atom"

interface AlertFailureProps { messageHeader: string, messageBody: string }
const AlertFailure: FC<AlertFailureProps> = (props) => {
    const {
        messageHeader = "Failure!",
        messageBody = "Login Failurefuly"
    } = props
    return (
        <div>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <AlertHeader label={messageHeader}></AlertHeader>
                <AlertBody label={messageBody}></AlertBody>
            </div>
        </div>
    )
}
export default AlertFailure