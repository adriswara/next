import { FC } from "react"
import Image from "next/image";

interface ProductDetailImageProps { picname: string }
const ProductDetailImage: FC<ProductDetailImageProps> = (props) => {
    const {
        picname = "profilePicSq.jpg"
    } = props

    return (
        <div className="w-full">
            <div className="relative m-auto" role="region" aria-roledescription="carousel">
                <div className="overflow-hidden">
                    <div className="flex -ml-4" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                        <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                            {/* img */}
                            <Image src={"/product-default.png"} alt={"/product-default.png"} width={5000} height={5000} className="w-full object-cover object-center aspect-square" />
                        </div>
                    </div>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full top-1/2 -translate-y-1/2 bg-slate-100 border absolute left-3 z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4">
                        <path d="m12 19-7-7 7-7">
                        </path>
                        <path d="M19 12H5">
                        </path>
                    </svg>
                    <span className="sr-only">Previous slide</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full top-1/2 -translate-y-1/2 bg-slate-100 border absolute right-3 z-50" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                        <path d="M5 12h14">
                        </path>
                        <path d="m12 5 7 7-7 7">
                        </path>
                    </svg>
                    <span className="sr-only">Next slide</span>
                </button>
            </div>
        </div>
    )
}

export default ProductDetailImage