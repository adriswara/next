
'use client'
import { Poppins } from "next/font/google";
import GetData from "@/services/getData.service";
import ProductDetails from "@/components/organisms/ProductDetails.organisms";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default function Home() {
  // get product name from link
  const pathname : string | null = usePathname()
  const selectedProduct = decodeURI(pathname+"")
  // 
  const query = selectedProduct
  const [product, setProduct] = useState<{ type_product: string | undefined, name_product: string | undefined, price_product: number | undefined, display_product: string | undefined }>()
  const datas = async () => { GetData(query).then((resp => { setProduct(resp.Product[0]) })).catch(resp => console.log(resp)) }
  useEffect(() => { datas() }, [])


  return (

    <ProductDetails itemType={product?.type_product} itemName={product?.name_product} itemPrice={product?.price_product} itemImage={product?.display_product} descriptionText={""} itemInclude={""}></ProductDetails>

  );
}


