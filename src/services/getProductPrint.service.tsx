import GetData from "./getData.service"
import ItemProduct from "@/components/organisms/itemProduct.organisms";

// get data
async function GetProductPrint() {
    const datas = await GetData("productPrints")
    console.log(datas)
    return (
        <div className="grid grid-cols-4">

            {datas.product_print.map((data: { type_product: number, name_product: string, price_product: number, display_product: string }) => (

            
                <ItemProduct itemType={data.type_product} itemName={data.name_product} itemPrice={data.price_product} itemImage={data.display_product}></ItemProduct>

            ))}

        </div>
    )

}
export default GetProductPrint