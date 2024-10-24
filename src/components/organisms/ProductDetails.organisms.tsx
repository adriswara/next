import { FC } from "react";

import ProductDetailDesc from "../molecules/ProductDetailDesc.molecule";
import ProductDetailShow from "../molecules/ProductDetailShow.molecule";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, FormEvent } from "react"



interface ProductDetailsProps { point_raw: number | undefined; itemId: number | undefined, itemType: number | undefined, itemName: string | undefined, itemPrice: number | undefined, itemImage: string | undefined, descriptionText: string | undefined, itemInclude: string | undefined }
const ProductDetails: FC<ProductDetailsProps> = (props) => {
    const {
        itemType = 0,
        itemName = "",
        itemPrice = 0,
        itemImage = "/product-default.png",
        descriptionText = "Lorem Ipsum Dolor sit amet",
        itemInclude = "",
        itemId = 0,
        point_raw = 0
    } = props
    const link = "product/detail/" + itemName


    return (
        <main className="flex-1 flex mt-16 w-full px-80">
            <div className="flex-1 flex flex-col">
                <div className="md:wrapper">
                    <ProductDetailShow itemId={itemId} picname={itemImage} productName={itemName} productPrice={itemPrice} productItemInclude={itemInclude} productItemClassification={itemType} point_raw={point_raw}></ProductDetailShow>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400 mt-8">
                    </div>
                    <ProductDetailDesc descriptionText={descriptionText}></ProductDetailDesc>
                </div>
            </div>
        </main>

    )
}

export default ProductDetails