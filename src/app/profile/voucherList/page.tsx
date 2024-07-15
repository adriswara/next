import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherDescDiscount from "@/components/molecules/VoucherLeftDesc.molecule";
import VoucherRightDescCodeStatus from "@/components/molecules/VoucherRightDesc.molecule";
import Image from "next/image";

export default function Home() {

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mx-5 my-5">
                {/* voucher items */}
                <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
                    {/* left voucher section*/}
                    <VoucherDescDiscount type={1}></VoucherDescDiscount>
                    {/* right voucher section*/}
                    <VoucherRightDescCodeStatus status={1}></VoucherRightDescCodeStatus>
                </div>
                <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
                    {/* left component */}
                    <VoucherDescDiscount type={2}></VoucherDescDiscount>
                    {/* right component */}
                    <VoucherRightDescCodeStatus status={0}></VoucherRightDescCodeStatus>
                </div>
            </div>
        </div>
    );
}


