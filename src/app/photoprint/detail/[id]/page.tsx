
import { Poppins } from "next/font/google";
import GetData from "@/services/getData.service";
import ProductDetails from "@/components/organisms/ProductDetails.organisms";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default async function Home() {
  const datas = await GetData("productPrints")
  console.log(datas)
  return (

    <ProductDetails itemType={""} itemName={""} itemPrice={0} itemImage={""} descriptionText={""} itemInclude={""}></ProductDetails>
   
  );
}


