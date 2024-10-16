'use client'
import { FC, useEffect } from "react";
import VoucherDescDiscount from "../molecules/VoucherLeftDesc.molecule";
import GetData from "@/services/getData.service";
import { useState } from "react";
import Cookies from 'js-cookie'
import ModalNotification from "../molecules/modalNotification.molecule";
import { useRouter } from 'next/navigation';



interface VoucherRedeemProps { id_voucher: number, voucherType: number, price: number, discount: number, buyReq: number, itemFree: number, title: string, dateStart: string, dateEnd: string, productRange: string, code: string, point: number }
const VoucherRedeem: FC<VoucherRedeemProps> = (props) => {
    const {
        voucherType = 0,
        price = 0,
        discount = 0,
        buyReq = 0,
        itemFree = 0,
        title = "",
        dateStart = "",
        dateEnd = "",
        productRange = "",
        code = "",
        id_voucher = 0,
        point = 0
    } = props
    //
    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number, point_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    //  
    const [showModalNotif, setShowModalNotif] = useState(false);
    const router = useRouter()

    //
    const handleRedeem = async () => {
        setShowModalNotif(true)

        var userPoint = user?.point_user

        var tempVoucher = userPoint && userPoint > price ? id_voucher  : null

        if(tempVoucher!=null){
            console.log("point cukup")
        }
        else{
            console.log("point tidak cukup")
        }

        const data = {
            fk_voucher: Number(tempVoucher),
            fk_user: Number(user?.id_user)
        };

        try {
            const response = await fetch('http://localhost:8081/handleRedeemVoucher', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                handlePoint()
                router.push('/profile')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    //
    const handlePoint = async () => {

        var newPoint =  user?.point_user ? Number(user?.point_user) - price : null

        const data = {
            id_user: Number(user?.id_user),
            point_user: newPoint
        };
        try {
            const response = await fetch('http://localhost:8081/pointTransaction', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    // 
    useEffect(() => { datas() }, [])

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
            {/* voucher left section */}
            <VoucherDescDiscount type={voucherType} discount={discount} buyReq={buyReq} itemFree={itemFree} title={title} dateStart={dateStart} dateEnd={dateEnd} productRange={productRange} point={point}></VoucherDescDiscount>
            {/* voucher right component */}
            <div>
                <div className="grid grid-cols-2">
                    <div className="text-blue-800 text-sm ml-35 mr-0">Code: {code}</div>
                    {/* <VoucherCodeCopyButton></VoucherCodeCopyButton> */}
                </div>
            </div>
            <div className="bg-gray-300 -mb-5 h-12 mt-3 pl-3"><p className="border-2 border-solid border-black rounded-2xl text-sm w-24 h-8 mt-2 pl-3 pt-1">{price} Points</p></div>
            <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /> <button onClick={() => handleRedeem()} className="border-2 border-solid border-slateBlue rounded-[15px] bg-slateBlue text-white text-sm w-24 h-8 mr-11 float-right mt-2" >Redeem</button></div>
            <ModalNotification show={showModalNotif} onClose={() => setShowModalNotif(false)} notificationType={2} message={"Transaction Complete, Please Wait.."}></ModalNotification>
        </div>
    )
}

export default VoucherRedeem