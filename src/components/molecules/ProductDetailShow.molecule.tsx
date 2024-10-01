import { FC } from "react";
import Image from "next/image";
import ProductDetailImage from "../atoms/ProductDetailImage.atom";
import ProductDetailMain from "../atoms/ProductDetailMain.atom";

interface ProductDetailShowProps { }
const ProductDetailShow: FC<ProductDetailShowProps> = (props) => {
    const {
    } = props
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
            <ProductDetailImage picname={""}></ProductDetailImage>
            <ProductDetailMain picname={""}></ProductDetailMain>
        </div>
    );
}
export default ProductDetailShow