import { FC } from "react";

import Image from "next/image";
import AlertSucess from "../molecules/alertSucess.molecule";
import AlertWarning from "../molecules/alertWarning.molecule";
import AlertFailure from "../molecules/alertFailure.molecule";



interface AlertStatusProps { status: number, messageHeader: string, messageBody: string}
const AlertStatus: FC<AlertStatusProps> = (props) => {
    const {
    status = 0,
    messageHeader = "Header",
    messageBody = "Body"
    } = props
    return (
        <div>
            {status==1?<AlertFailure messageHeader={""} messageBody={""}></AlertFailure> :status==2?<AlertWarning messageHeader={""} messageBody={""}></AlertWarning>:status==3?<AlertSucess messageHeader={""} messageBody={""}></AlertSucess>:<div></div>}
        </div>
    )
}

export default AlertStatus