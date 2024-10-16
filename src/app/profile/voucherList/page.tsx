'use client'
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned.organisms";
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const OwnedVoucher = () => {

    type ownedVoucherType = {
        id_voucher_ownership: number,
        fk_user: number,
        fk_voucher: number,
        is_usable: number,
        name_product: string,
        description_product: string,
        price_product: number,
        title: string,
        voucherType: number,
        price: number,
        discount: number,
        buyReq: number,
        itemFree: number,
        dateStart: string,
        dateEnd: string,
        productRace: string,
        code: string
        productRange: string
        Point: number
    }

    // get user id from cookie
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const userData = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    // 
    const querryVoucher = 'ownedVoucher/' + user?.id_user
    const [ownedVoucher, setOwnedVoucher] = useState<ownedVoucherType[]>()
    const dataOwnedVouchers = async () => { GetData(querryVoucher).then((resp => { setOwnedVoucher(resp.voucher_ownership); console.log(resp.voucher_ownership) })).catch(resp => console.log(resp)) }
    // 
    useEffect(() => { userData() }, [])
    useEffect(() => { dataOwnedVouchers() }, [user])


    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mx-5 my-5">
                {/* voucher items */}

                {ownedVoucher?.map((data: ownedVoucherType) => (
                    <div>
                        <VoucherOwned voucherType={data.voucherType} is_usable={data.is_usable} discount={data.discount} buyReq={data.buyReq} itemFree={data.itemFree} title={data.title} dateStart={data.dateStart} dateEnd={data.dateEnd} productRange={data.productRange} code={data.code} hideButton={1} point={data.Point}></VoucherOwned>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default OwnedVoucher;