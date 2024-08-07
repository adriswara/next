import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned";


async function getData() {
    const res = await fetch('http://localhost:8081/ownedVoucher')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }


    return res.json()
    // return JSON.stringify(res)
}

export default async function Home() {
    const datas = await getData()



    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mx-5 my-5">
                {/* voucher items */}

                {datas.voucher_ownership.map((data: { id_voucher_ownership: number; fk_user: number; fk_voucher: number, is_usable: number; id: number; title: string; voucherType: number; price: number; discount: number; buyReq: number; itemFree: number; dateStart: string; dateEnd: string; productRange: string }) => (
                    // <div >
                    //     <span>{data.id}</span>
                    //     <span>{data.title}</span>
                    // </div>
                    <VoucherOwned voucherType={data.voucherType} voucherStatus={data.is_usable}></VoucherOwned>
                ))}
                <VoucherOwned voucherType={1} voucherStatus={1}></VoucherOwned>
                <VoucherOwned voucherType={2} voucherStatus={2}></VoucherOwned>
                <VoucherOwned voucherType={2} voucherStatus={1}></VoucherOwned>

            </div>
        </div>
    );
}


