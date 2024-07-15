import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecult";
import Image from "next/image";

export default function Home() {

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full" >
           {/* voucher navigation */}
            <VoucherFilterForm></VoucherFilterForm>
            {/* voucher section */}
            <div  className="mx-5 my-5">
                {/* voucher items */}
                <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
                    {/* left voucher section*/}
                    <div className="ml-5">
                        {/* huge discount text */}
                        <div className="text-3xl">X% OFF</div>
                        {/* service range text */}
                        <div className="text-sm">FOR WHOLE ORDER</div>
                        {/* date */}
                        <div className="text-xs text-gray-500">XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                        {/* item range range text */}
                        <div className="text-xs text-gray-500">For All products</div>
                        {/* additionals */}
                        <div className="text-xs text-gray-500">Combination: get xx% off when....</div>
                    </div>
                    {/* right voucher section*/}
                    <div>
                        {/* code div */}
                        <div className="grid grid-cols-2">
                            {/* code */}
                            <div className="text-blue-800 text-sm ml-35 mr-0">Code: CODE_123sksdiof</div>
                            {/* copy logi */}
                            <div className="text-sm grid grid-cols-2 w-12 mr-0">
                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                                    <title>copy-line</title>
                                    <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                                </svg>
                                <p>Copy</p>
                            </div>
                        </div>
                        {/* status active */}
                        <div className="pt-20 pl-32 w-72 float-right"><button type="button" disabled className="border-2 border-solid border-jonasBorder rounded-[15px] bg-green-900 text-white text-sm w-20 h-8 ml-7">ACTIVE</button></div>
                    </div>
                </div>
                <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-2 mb-5 pt-5 pb-5">
                    {/* left component */}
                    <div className="ml-5">
                        {/* huge text budle */}
                        <div className="text-3xl w-60">BUY x GET x FREE</div>
                        {/* service range */}
                        <div className="text-sm">FOR WHOLE ORDER</div>
                        {/* date */}
                        <div className="text-xs">XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                        {/* product range */}
                        <div className="text-xs">For All products</div>
                        {/* additionals */}
                        <div className="text-xs">Combination: get xx% off when....</div>
                    </div>
                    {/* right component */}
                    <div>
                        {/* code div */}
                        <div className="grid grid-cols-2">
                            {/* code */}
                            <div className="text-blue-800 text-sm ml-35 mr-0">Code: CODE_123sksdiof</div>
                            {/* copy logo */}
                            <div className="text-sm grid grid-cols-2 w-12 mr-0">
                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                                    <title>copy-line</title>
                                    <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                                </svg>
                                <p>Copy</p>
                            </div>
                        </div>
                        {/* status */}
                        <div className="pt-20 pl-32 w-72 float-right"><button type="button" disabled className="border-2 border-solid border-jonasBorder rounded-[15px] bg-gray-700 text-white text-sm w-32 h-8 ml-0">NOT AVAILABLE</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


