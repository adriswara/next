import { FC } from "react"
import Image from "next/image";

interface ProductDetailMainProps { picname: string }
const ProductDetailMain: FC<ProductDetailMainProps> = (props) => {
    const {
        picname = "profilePicSq.jpg"
    } = props

    return (
        <div className="px-4 sm:p-0 flex flex-col justify-between">
            <div>
                <h2 className="font-semibold text-xl">Frame Klasik JL4K  12RP Gold + Kc</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-xl text-gray-500">Rp95.000</div>
                    <div className="text-end">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-full px-3 py-1">-</button>
                        <span className="px-3">
                            1
                        </span>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-full px-3 py-1">+</button>
                    </div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400"></div>
                <div className="px-4 sm:p-0 flex flex-col justify-between">
                    <div className="my-2 flex flex-col gap-1">
                        <h6 className="font-normal md:font-semibold">What's included</h6>
                        <div>whats is this</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white bg-black hover:bg-black/90 hover:text-white h-10 px-4 py-2 w-full mx-auto md:mx-0 mt-3">Add to Cart</button>
        </div>
    )
}

export default ProductDetailMain