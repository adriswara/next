import ProfileStatCard from "@/components/organisms/ProfileStatCard.organisms";
import GetData from "./getData.service"

// get data
async function GetCard() {
    const datas = await GetData("userGet/1")
    // console.log(datas)
    return (
        <div>

            {datas.User.map((data: { id_user: number; name_user: string; password_user: number, email_user: number; phone_user: number; adress_user: string; point_user: number; level_user: number; showcase_user: number; display_user: string; isDelete_user: number }) => (

                <ProfileStatCard picname={data.display_user} name={data.name_user} level={data.level_user} percentage={50} xpLeft={0} nextLevel={Number(data.level_user)+1} point={data.point_user} showcase={data.showcase_user}></ProfileStatCard>

            ))}

        </div>
    )

}
export default GetCard