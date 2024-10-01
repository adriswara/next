import { FC } from "react";

interface ProductDetailDescProps { descriptionText: string }
const ProductDetailDesc: FC<ProductDetailDescProps> = (props) => {
    const {
        descriptionText = ""
    } = props
    return (
        <div className="px-4 sm:p-0 flex flex-col justify-between">
            <div className="my-2 flex flex-col gap-1"><h6 className="font-normal md:font-semibold">Product Description</h6>
                <div>{descriptionText}</div>
            </div>
        </div>
    );
}
export default ProductDetailDesc