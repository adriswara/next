import { FC } from "react";
import Image from "next/image";
import ProductDetailImage from "../atoms/ProductDetailImage.atom";
import ProductDetailMain from "../atoms/ProductDetailMain.atom";

interface ProductDetailShowProps {point_raw:number, itemId:number, picname:string, productName:string, productPrice: number, productItemInclude:string, productItemClassification:number }
const ProductDetailShow: FC<ProductDetailShowProps> = (props) => {
    const {
        picname = "",
        productName = "",
        productPrice = 0,
        productItemInclude = "",
        productItemClassification = 0,
        itemId = 0,
        point_raw = 0
    } = props
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <ProductDetailImage picname={picname}></ProductDetailImage>
            <ProductDetailMain itemId={itemId} productName={productName} productPrice={productPrice} productItemInclude={productItemInclude} productItemClassification={productItemClassification} point_raw = {point_raw} ></ProductDetailMain>
        </div>
    );
}
export default ProductDetailShow