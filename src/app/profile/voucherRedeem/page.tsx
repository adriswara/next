import RedeemButton from "@/components/atoms/RedeemButton.atom"
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule"
import VoucherDescDiscount from "@/components/molecules/VoucherLeftDesc.molecule"

export default function Home() {

    const voucherRightComponent = {

    }
    const voucherRightCode = {
        display: "grid",
        gridTemplateColumns: "auto auto"
    }


    const priceText = {
        border: "1px solid lightGrey",
        borderRadius: 15,
        backgroundColor: "",
        color: "black",
        fontSize: 13,
        width: 90,
        height: 30,
        marginRight: 45,
        paddingLeft: 13,
        paddingTop: 3,
        marginTop: 10
    }


    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
            {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div className="mt-5 mb-5">
                {/* voucher grid */}
                <div className="grid grid-cols-2">
                    {/* voucher object left */}
                    <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                        {/* voucher left section */}
                        <VoucherDescDiscount type={1}></VoucherDescDiscount>

                        <div style={voucherRightComponent}>
                            <div style={voucherRightCode}>
                            </div>
                        </div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                    </div>
                    {/* voucher object left */}
                    <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                        <VoucherDescDiscount type={1}></VoucherDescDiscount>

                        <div style={voucherRightComponent}>
                            <div style={voucherRightCode}>
                            </div>
                        </div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                    </div>
                </div>
                {/* voucher list */}
                <div className="mt-5 mb-5">
                    <div className="grid grid-cols-2">
                        {/* voucher right */}
                        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                            <VoucherDescDiscount type={2}></VoucherDescDiscount>

                            <div style={voucherRightComponent}>
                                <div style={voucherRightCode}>
                                </div>
                            </div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                        </div>
                        {/* voucher right */}
                        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                            <VoucherDescDiscount type={2}></VoucherDescDiscount>

                            <div style={voucherRightComponent}>
                                <div style={voucherRightCode}>
                                </div>
                            </div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


