import ProfileStatCard from "@/components/organisms/ProfileStatCard.organisms";
import { useEffect, useState } from "react"
import GetData from "./getData.service"


// get data
function GetCard() {
    const [user, setUser] = useState<{ id_user: number; name_user: string; password_user: number, email_user: number; phone_user: number; adress_user: string; point_user: number; level_user: number; showcase_user: number; display_user: string; isDelete_user: number }>()
    const datas = async () => { GetData('userGet/1').then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }

    useEffect(() => { datas() }, [])
    return (
        <div>


                <ProfileStatCard name={String(user?.name_user)} level={Number(user?.level_user)} percentage={50} xpLeft={0} nextLevel={Number(user?.level_user)+1} point={Number(user?.point_user)} showcase={Number(user?.showcase_user)}></ProfileStatCard>


        </div>
    )

}
export default GetCard