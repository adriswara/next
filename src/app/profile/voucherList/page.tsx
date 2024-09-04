import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned";
import GetData from "@/services/getData.service";





export default async function Home() {
    const datas = await GetData('ownedVoucher')

console.log(datas.voucher_ownership)

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mx-5 my-5">
                {/* voucher items */}

                {datas.voucher_ownership.map((data: { id_voucher_ownership: number; fk_user: number; fk_voucher: number, is_usable: number; id: number; title: string; voucherType: number; price: number; discount: number; buyReq: number; itemFree: number; dateStart: string; dateEnd: string; productRange: string; code: string }) => (
                    <div>

                        {/* only for testing */}

                        {/* <span>{data.id_voucher_ownership}</span>
                        <span>{data.title}</span>
                        <span>{data.is_usable}</span> */}
                        {/* only for testing */}


                        <VoucherOwned voucherType={data.voucherType} is_usable={data.is_usable} discount={data.discount} buyReq={data.buyReq} itemFree={data.itemFree} title={data.title} dateStart={data.dateStart} dateEnd={data.dateEnd} productRange={data.productRange} code={data.code}></VoucherOwned>

                    </div>
                ))}
            </div>
        </div>
    );
}


