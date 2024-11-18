import ProfileStatCardJonas from "@/components/organisms/ProfileStatCardJonas.organisms";
import { useEffect, useState } from "react"
import GetData from "./getData.service"
import Cookies from 'js-cookie'
import ProfileStatCardSidang from "@/components/organisms/ProfileStatCardSidang.organisms";
import { usePathname, useRouter } from "next/navigation";


// get data
function GetCard(mode: number) {
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number; name_user: string; password_user: number, email_user: number; phone_user: number; adress_user: string; point_user: number; level_user: number; showcase_user: number; display_user: string; isDelete_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    const idUser = user?.id_user
    const queryTotalTransaksi = 'totalTransaksi/' + idUser
    const [totalTransaksi, setTotalTransaksi] = useState<{ Count_transaksi: number }>()
    const dataTransaksi = async () => { GetData(queryTotalTransaksi).then((resp => { setTotalTransaksi(resp.Transaction[0]) })).catch(resp => console.log(resp)) }
    const queryTotalVoucher = 'totalVoucher/' + idUser
    const [totalVoucher, setTotalVoucher] = useState<{ count_voucher: number }>()
    const dataVoucher = async () => { GetData(queryTotalVoucher).then((resp => { setTotalVoucher(resp.VoucherOwned[0]) })).catch(resp => console.log(resp)) }
    const pathname = String(usePathname())

    const liteId = pathname.split("/")[3]
    const liteRoute = "/profile/showcaseLite/" + liteId

    useEffect(() => { datas() }, [])
    useEffect(() => { dataTransaksi() }, [user])
    useEffect(() => { dataVoucher() }, [idUser])

    console.log("isi id user " + idUser)
    console.log("query " + queryTotalTransaksi)
    console.log("isi total transaksi " + totalTransaksi?.Count_transaksi)

    return (
        <div>
            {/* <ProfileStatCardJonas name={String(user?.name_user)} level={Number(user?.level_user)} percentage={50} xpLeft={0} nextLevel={Number(user?.level_user)+1} point={Number(user?.point_user)} showcase={Number(user?.showcase_user)}></ProfileStatCardJonas> */}
            {mode == 1 && pathname != liteRoute ? <ProfileStatCardSidang name={String(user?.name_user)} level={Number(user?.level_user)} percentage={50} xpLeft={0} nextLevel={Number(user?.level_user) + 1} point={Number(user?.point_user)} showcase={Number(user?.showcase_user)}></ProfileStatCardSidang> : (mode == 0 && pathname != liteRoute ? <ProfileStatCardJonas name={String(user?.name_user)} voucher={Number(totalVoucher?.count_voucher)} point={Number(user?.point_user)} transaksi={Number(totalTransaksi?.Count_transaksi)}></ProfileStatCardJonas> : <></>)}
        </div>
    )

}
export default GetCard