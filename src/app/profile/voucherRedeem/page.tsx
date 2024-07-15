import RedeemButton from "@/components/atoms/RedeemButton.atom"
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecult"

export default function Home() {

    const voucherLeftComponent = {
        marginLeft: 20
    }

    const voucherRightComponent = {

    }
    const voucherRightCode = {
        display: "grid",
        gridTemplateColumns: "auto auto"
    }

    const hugetextVoucher1 = {
        fontSize: 30
    }
    const hugetextVoucher2 = {
        fontSize: 30,
        width: 240
    }

    const bigTextVoucher = {
        fontSize: 14
    }
    const descTextVoucher = {
        fontSize: 12,
        color: "grey"
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
                        <div style={voucherLeftComponent}>
                            <div style={hugetextVoucher1}>X% OFF</div>
                            <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                            <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                            <div style={descTextVoucher}>For All products</div>
                            <div style={descTextVoucher}>Combination: get xx% off when....</div>
                        </div>
                        <div style={voucherRightComponent}>
                            <div style={voucherRightCode}>
                            </div>
                        </div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                        <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                    </div>
                    {/* voucher object left */}
                    <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                        <div style={voucherLeftComponent}>
                            <div style={hugetextVoucher1}>X% OFF</div>
                            <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                            <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                            <div style={descTextVoucher}>For All products</div>
                            <div style={descTextVoucher}>Combination: get xx% off when....</div>
                        </div>
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
                            <div style={voucherLeftComponent}>
                                <div style={hugetextVoucher2}>BUY x GET x FREE</div>
                                <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                                <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                                <div style={descTextVoucher}>For All products</div>
                                <div style={descTextVoucher}>Combination: get xx% off when....</div>
                            </div>
                            <div style={voucherRightComponent}>
                                <div style={voucherRightCode}>
                                </div>
                            </div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><p style={priceText}>90 Points</p></div>
                            <div className="bg-gray-300 -mb-5 h-12 mt-3"><link rel="stylesheet" href="" /><RedeemButton></RedeemButton></div>
                        </div>
                        {/* voucher right */}
                        <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 -mt-px mb-5 pt-5 pb-5 ml-5 mr-5 ">
                            <div style={voucherLeftComponent}>
                                <div style={hugetextVoucher2}>BUY x GET x FREE</div>
                                <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                                <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                                <div style={descTextVoucher}>For All products</div>
                                <div style={descTextVoucher}>Combination: get xx% off when....</div>
                            </div>
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


