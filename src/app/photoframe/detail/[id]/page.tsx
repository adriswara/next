
import { Poppins } from "next/font/google";
import Image from "next/image";

import GetProductFrame from "@/services/getProductFrame.service";
import GetData from "@/services/getData.service";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export default async function Home() {
  const datas = await GetData("productFrames")
  console.log(datas)
  return (

    <main className="flex-1 flex mt-16 w-full px-80">
      <div className="flex-1 flex flex-col">
        <div className="md:wrapper">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <div className="w-full">
              <div className="relative m-auto" role="region" aria-roledescription="carousel">
                <div className="overflow-hidden">
                  <div className="flex -ml-4"  style={{transform: "translate3d(0px, 0px, 0px)"}}>
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
          </div>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400 mt-8">
          </div>
          <div className="px-4 sm:p-0 flex flex-col justify-between">
            <div className="my-2 flex flex-col gap-1"><h6 className="font-normal md:font-semibold">Product Description</h6>
              <div>tes</div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}


