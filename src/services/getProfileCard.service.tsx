import ProfileStatCardJonas from "@/components/organisms/ProfileStatCardJonas.organisms";
import { useEffect, useState } from "react"
import GetData from "./getData.service"
import Cookies from 'js-cookie'
import ProfileStatCardSidang from "@/components/organisms/ProfileStatCardSidang.organisms";
import { usePathname, useRouter } from "next/navigation";


// get data
function GetCard(mode: number | undefined) {
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number; name_user: string; password_user: number, email_user: number; phone_user: number; adress_user: string; point_user: number; totalxpUser: number; level_user: number; showcase_user: number; display_user: string; isDelete_user: number }>()
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

    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number, percentage: number, to_progress: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //
    const querryLevelMaster = 'getLevelMaster'
    const [levelMaster, setLevelMaster] = useState<{ id_LevelMaster: number, level_LevelMaster: number, xp_LevelMaster: number }>()
    const datalevelMaster = async () => { GetData(querryLevelMaster).then((resp => { setLevelMaster(resp.levelMaster[0]); console.log("point setting:", resp.levelMaster) })).catch(resp => console.log(resp)) }
    //
    const [userXpState, setUserXpState] = useState<number>()
    const [userLevelState, setUserLevelState] = useState<number>()
    const [userXpLeftState, setUserXpLeftState] = useState<number>()
    const [userPercentageLeft, setUserPercentageLeft] = useState<number>()


    //
    //
    const handleCountLevel = () => {
        console.log("HANDLE COUNT LEVEL")
        // const pointToXpRatio = pointSetting?.percentage ? pointSetting?.percentage : 0
        // console.log("point setting percentage : " + pointToXpRatio)
        const nextLevelXponent = pointSetting?.to_progress ? pointSetting?.to_progress : 0
        // const dbLevelBarrier = levelMaster?.level_LevelMaster
        console.log("point setting to progress : " + nextLevelXponent)
        const userPoint = user?.point_user ? user?.point_user : 0
        const userXp = user?.totalxpUser ? user.totalxpUser : 0
        console.log("point user : " + userPoint)
        const currentXp = userXp
        console.log("currentxp = userpoint * point setting percentage : " + currentXp)
        const showlevel = currentXp > 4000 ? 5 : (currentXp > 3000 ? 4 : (currentXp > 2000 ? 3 : (currentXp > 1000 ? 2 : 1)))
        const currentLevel = currentXp / nextLevelXponent
        console.log("current level = current xp / point setting to progress : " + currentLevel)
        const toNextLevel = nextLevelXponent * (Math.floor(currentLevel) + 1)
        console.log("to next level = to progress * current level +1 : " + toNextLevel)
        const varxpLeft = toNextLevel - currentXp
        console.log("var xp levt" + varxpLeft)
        const percentageLeft = (varxpLeft / toNextLevel) * 100
        console.log("precentage = varxplevt(" + varxpLeft + ") / to next level(" + toNextLevel + ") * 100 = " + percentageLeft)
        //
        setUserXpState(currentXp)
        // setUserLevelState(Math.floor(currentLevel))
        setUserLevelState(showlevel)
        setUserXpLeftState(varxpLeft)
        setUserPercentageLeft(currentLevel * 100 % 100) // currentlevel = current xp
        console.log(currentLevel)
        //
    };
    // 
    //
    useEffect(() => { dataPointSetting() }, [])
    useEffect(() => { datas() }, [])
    useEffect(() => { handleCountLevel() }, [user, pointSetting])
    useEffect(() => { dataTransaksi() }, [user])
    useEffect(() => { dataVoucher() }, [idUser])


    // console.log("isi id user " + idUser)
    // console.log("query " + queryTotalTransaksi)
    // console.log("isi total transaksi " + totalTransaksi?.Count_transaksi)

    return (
        <div>
            {/* <ProfileStatCardJonas name={String(user?.name_user)} level={Number(user?.level_user)} percentage={50} xpLeft={0} nextLevel={Number(user?.level_user)+1} point={Number(user?.point_user)} showcase={Number(user?.showcase_user)}></ProfileStatCardJonas> */}
            {mode == 1 && pathname != liteRoute ? <ProfileStatCardSidang xp={userXpState ? userXpState : 0} name={String(user?.name_user)} level={userLevelState ? userLevelState : 0} percentage={userPercentageLeft ? Number(userPercentageLeft.toFixed(2)) : 0} xpLeft={userXpLeftState ? userXpLeftState : 0} nextLevel={userLevelState ? userLevelState + 1 : 0 + 1} point={Number(user?.point_user)} transaksi={Number(totalTransaksi?.Count_transaksi)}></ProfileStatCardSidang> : (mode == 0 && pathname != liteRoute ? <ProfileStatCardJonas name={String(user?.name_user)} voucher={Number(totalVoucher?.count_voucher)} point={Number(user?.point_user)} transaksi={Number(totalTransaksi?.Count_transaksi)}></ProfileStatCardJonas> : <></>)}
        </div>
    )

}
export default GetCard