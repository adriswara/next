import ProfileStatCard from "@/components/organisms/ProfileStatCard.organisms";
import GetData from "./getData.service"
import ItemFrame from "@/components/organisms/itemFrame.organisms";

// get data
async function GetProductFrame() {
    const datas = await GetData("productFrames")
    console.log(datas)
    return (
        <div className="grid grid-cols-4">

            {datas.ProductFrame.map((data: { type_product: number, name_product: string, price_product: number, display_product: string }) => (

                <ItemFrame itemType={data.type_product} itemName={data.name_product} itemPrice={data.price_product} itemImage={data.display_product}></ItemFrame>

            ))}

        </div>
    )

}
export default GetProductFrame