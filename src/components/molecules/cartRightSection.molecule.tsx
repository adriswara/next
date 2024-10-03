import { FC } from "react"


interface CartRightSectionProps {totalPrice: number }
const CartRightSection: FC<CartRightSectionProps> = (props) => {
    const {totalPrice = 0} = props
    return (
        <div className="basis-1/4">
            <div>
                <div className="rounded md:border bg-card text-card-foreground p-4 shadow">
                    <div className="flex flex-col space-y-1.5">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                            <div className="flex flex-row items-center gap-2">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    Shipping
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className="pt-0 mt-4">
                        <div className="flex flex-col text-sm">
                            <div className="text-justify mt-2">
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf:" data-state="closed">
                                    Select Shipping
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400">
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-4">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                            <div className="flex flex-row items-center gap-2">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    Payment
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className="pt-0 mt-4">
                        <div className="flex flex-col text-xl">
                            <div className="text-right font-semibold">
                                Total
                            </div>
                            <div className="text-right font-semibold">
                                Rp{totalPrice}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-5">
                            <h3 className="font-bold">
                                TERMS OF USE
                            </h3>
                            <p>By clicking the "Continue to Payment button" you agree to our terms and condition</p>
                            <a className="text-primary-500" href="https://jonasphoto.co.id/content/term-and-condition">TERMS OF USE</a>
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white bg-black hover:bg-black/90 hover:text-white h-9 rounded-md px-3 w-full mt-4">
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartRightSection