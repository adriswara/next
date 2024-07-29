import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned";


export default function Home() {

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mx-5 my-5">
                {/* voucher items */}
                <VoucherOwned voucherType={1} voucherStatus={1}></VoucherOwned>
                <VoucherOwned voucherType={2} voucherStatus={2}></VoucherOwned>
                <VoucherOwned voucherType={2} voucherStatus={1}></VoucherOwned>

            </div>
        </div>
    );
}


