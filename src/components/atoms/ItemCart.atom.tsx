import { FC } from "react"

interface ItemCartProps { productName: string, productDescription: string, productQuantity: number, totalPrice: number }
const ItemCart: FC<ItemCartProps> = (props) => {
    const { productName = "Product 1",
        productDescription = "This product is colored and second variant",
        productQuantity = 0,
        totalPrice = 0
    } = props

    return (

        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                <div className="flex flex-col">
                    <div className="mb-2">
                        {productName}
                    </div>
                    <div>
                        <div className="text-[10px]">
                            {productDescription}
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r6:" data-state="closed">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-red-500 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path fill="none" d="M0 0h24v24H0V0z">
                        </path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z">
                        </path>
                    </svg>
                </button>
                <div className="flex flex-row items-center justify-end gap-2 text-sm mt-6">
                    <div>
                        <button className="rounded-full p-1 border w-6 h-6 flex items-center justify-center">
                            -
                        </button>
                    </div>
                    <div>
                        {productQuantity}
                    </div>
                    <div>
                        <button className="rounded-full p-1 border w-6 h-6 flex items-center justify-center">
                            +
                        </button>
                    </div>
                </div>
                <p className="mt-4">
                    Rp{totalPrice}
                </p>
            </td>
        </tr>

    )
}

export default ItemCart