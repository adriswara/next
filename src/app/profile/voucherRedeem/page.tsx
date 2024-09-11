
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule"
import VoucherRedeem from "@/components/organisms/VoucherRedeem.organisms";
import GetData from "@/services/getData.service";




export default async function Home() {
    const datas = await GetData('vouchers')

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mt-5 mb-5">
                {/* voucher grid */}
                <div className="grid grid-cols-2">
                    {/* database loop call */}
                    {datas.voucher.map((data: { id: number; title: string; voucherType: number; price: number; discount: number; buyReq: number; itemFree: number; dateStart: string; dateEnd: string; productRange: string; code: string }) => (
                        <div>


                            {/* testing purpose only */}
                            {/* <span>{data.id}</span>
                            <span>{data.title}</span>
                            <span>{data.voucherType}</span> */}
                            {/* testing purpose only */}


                            <VoucherRedeem voucherType={data.voucherType} price={data.voucherType} discount={data.discount} buyReq={data.buyReq} itemFree={data.itemFree} title={data.title} dateStart={data.dateStart} dateEnd={data.dateEnd} productRange={data.productRange} code={data.code}></VoucherRedeem>
                        </div>
                    ))}
                    {/* endloop */}
                </div>
            </div>
        </div>
    );
}


