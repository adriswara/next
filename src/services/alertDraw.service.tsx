import AlertStatus from "@/components/organisms/alertStatus.organisms"
import React, {Component, PropsWithChildren} from "react";


// get data
 function DrawAlert(status: number, header: string, body: string) {
    return (
        <AlertStatus status={status} messageHeader={header} messageBody={body}></AlertStatus>
    )
}
export default DrawAlert