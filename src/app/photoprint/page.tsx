
import Image from "next/image";
import { Poppins } from "next/font/google";
import GetProductPrint from "@/services/getProductPrint.service";
import GetData from "@/services/getData.service";
import FilterProduct from "@/components/molecules/FilterProduct.molecule";
import ItemProduct from "@/components/organisms/itemProduct.organisms";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default async function Home() {
  return (

    <div className={`${poppins.className} flex pt-5 pb-36 container mx-auto items-start gap-5 `}>
      <FilterProduct></FilterProduct>
      {/*  */}
      <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
        {/* voucher section */}
        <div className="mt-5 mb-5">
          {/* database loop call */}

        {GetProductPrint()}

          {/*  */}
        </div>
      </div>
      {/*  */}
    </div>


  );
}


