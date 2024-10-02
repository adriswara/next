import { FC } from "react";
import Image from "next/image";
import ProductDetailImage from "../atoms/ProductDetailImage.atom";
import ProductDetailMain from "../atoms/ProductDetailMain.atom";

interface ProductDetailShowProps {picname:string, productName:string, productPrice: number, productItemInclude:string, productItemClassification:string }
const ProductDetailShow: FC<ProductDetailShowProps> = (props) => {
    const {
        picname = "",
        productName = "",
        productPrice = 0,
        productItemInclude = "",
        productItemClassification = ""
    } = props
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <ProductDetailImage picname={picname}></ProductDetailImage>
            <ProductDetailMain productName={productName} productPrice={productPrice} productItemInclude={productItemInclude} productItemClassification={productItemClassification} ></ProductDetailMain>
        </div>
    );
}
export default ProductDetailShow