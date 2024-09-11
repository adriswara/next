import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";

import GetData from "@/services/getData.service";
import Image from "next/image";
import { Poppins } from "next/font/google";

import ItemFrame from "@/components/organisms/itemFrame.organisms";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default async function Home() {
  const datas = await GetData('vouchers')

  return (

    <div className={`${poppins.className} flex pt-5 pb-36 container mx-auto items-start gap-5 `}>
      <div className="w-[312px] flex-col flex gap-5 justify-start">
        <div className="border rounded-lg border-solid border-[#e5e7eb] h-auto p-4" >
          <ul>
            <form action="">
              <li > <h6 className="font-bold mb-3">Filter by category</h6> </li>
              <li><div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-3"></div></li>
              <li > <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> <label htmlFor=""> Album </label> </li>
              <li > <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> <label htmlFor=""> Frame </label></li>
              <li > <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> <label htmlFor=""> Miscelaneous Goods </label></li>
              <li > <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> <label htmlFor=""> Fnb </label></li>
            </form>

          </ul>
        </div>
      </div>
      {/*  */}
      <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
        {/* voucher navigation */}
        <VoucherFilterForm></VoucherFilterForm>
        {/* voucher section */}
        <div className="mt-5 mb-5">
          {/* voucher grid */}
          <div className="grid grid-cols-4">
            {/* database loop call */}
           <div>
            <ItemFrame voucherType={0} price={0} discount={0} buyReq={0} itemFree={0} title={""} dateStart={""} dateEnd={""} productRange={""} code={""}></ItemFrame>
           </div>
            {/* endloop */}
          </div>
        </div>
      </div>
    </div>


  );
}


