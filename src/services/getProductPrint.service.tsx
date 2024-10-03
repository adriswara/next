'use client'
import { useEffect, useState } from "react";
import GetData from "./getData.service"
import ItemProduct from "@/components/organisms/itemProduct.organisms";

type ProductType = {
  id_product: string;
  name_product: string;
  price_product: string;
  type_product: string;
  isDelete_product: string;
}

// get data
function GetProductPrint() {
  const [data, setData] = useState<ProductType[]>()


  useEffect(() => { GetData("productPrints").then((resp) => setData(resp.product_print)) }, [])
  
  return (
    <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
      {/* voucher section */}
      <div className="mt-5 mb-5">
        {/* database loop call */}
        <div className="grid" style={{ gridTemplateColumns: "auto auto auto auto" }}>

          {data?.map((data:ProductType ) => (

            <ItemProduct itemType={Number(data.type_product)} itemName={data.name_product} itemPrice={Number(data.price_product)}></ItemProduct>

          ))}

        </div>
      </div>
    </div>
  )

}
export default GetProductPrint