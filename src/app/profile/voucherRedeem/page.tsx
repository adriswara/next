import RedeemButton from "@/components/atoms/RedeemButton.atom"
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule"
import VoucherDescDiscount from "@/components/molecules/VoucherLeftDesc.molecule"
import VoucherOwned from "@/components/organisms/VoucherOwned";
import VoucherRedeem from "@/components/organisms/VoucherRedeem";

export default function Home() {

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mt-5 mb-5">
                {/* voucher grid */}
                <div className="grid grid-cols-2">
                    {/* voucher object left */}
                    <VoucherRedeem voucherType={1} price={0}></VoucherRedeem>
                    {/* voucher object left */}
                    <VoucherRedeem voucherType={1} price={0}></VoucherRedeem>
                </div>
                {/* voucher list */}
                <div className="mt-5 mb-5">
                    {/* voucher grid */}
                    <div className="grid grid-cols-2">
                        {/* voucher object left */}
                        <VoucherRedeem voucherType={2} price={0}></VoucherRedeem>
                        {/* voucher object left */}
                        <VoucherRedeem voucherType={2} price={0}></VoucherRedeem>
                    </div>
                </div>
            </div>
        </div>
    );
}


