import { FC } from "react";

import ProductDetailDesc from "../molecules/ProductDetailDesc.molecule";
import ProductDetailShow from "../molecules/ProductDetailShow.molecule";



interface ProductDetailsProps { itemType: number, itemName: string, itemPrice: number, itemImage: string }
const ProductDetails: FC<ProductDetailsProps> = (props) => {
    const {
        itemType = 0,
        itemName = "",
        itemPrice = 0,
        itemImage = "/product-default.png"
    } = props
    const link = "photoframe/detail/" + itemName
    return (
        <main className="flex-1 flex mt-16 w-full px-80">
            <div className="flex-1 flex flex-col">
                <div className="md:wrapper">
                    <ProductDetailShow></ProductDetailShow>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400 mt-8">
                    </div>
                   <ProductDetailDesc descriptionText={""}></ProductDetailDesc>
                </div>
            </div>
        </main>

    )
}

export default ProductDetails