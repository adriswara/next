import GetData from "./getData.service"
import ItemProduct from "@/components/organisms/itemProduct.organisms";

// get data
async function GetProductFrame() {
    const datas = await GetData("productFrames")
    console.log(datas)
    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
        {/* voucher section */}
        <div className="mt-5 mb-5">
          {/* database loop call */}
          <div className="grid grid-cols-4">

            {datas.product_frame.map((data: { type_product: number, name_product: string, price_product: number, display_product: string }) => (

              <ItemProduct itemType={data.type_product} itemName={data.name_product} itemPrice={data.price_product} itemImage={data.display_product}></ItemProduct>

            ))}

          </div>        
        </div>
      </div>
    )

}
export default GetProductFrame