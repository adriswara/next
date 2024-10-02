import { FC } from "react";

import ProductDetailDesc from "../molecules/ProductDetailDesc.molecule";
import ProductDetailShow from "../molecules/ProductDetailShow.molecule";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, FormEvent } from "react"



interface ProductDetailsProps { itemType: string | undefined, itemName: string | undefined, itemPrice: number | undefined, itemImage: string | undefined, descriptionText: string | undefined, itemInclude: string | undefined }
const ProductDetails: FC<ProductDetailsProps> = (props) => {
    const {
        itemType = "",
        itemName = "",
        itemPrice = 0,
        itemImage = "/product-default.png",
        descriptionText = "Lorem Ipsum Dolor sit amet",
        itemInclude = ""
    } = props
    const link = "photoframe/detail/" + itemName
    // 
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get('fk_user'))
        console.log(formData.get('fk_voucher'))
        console.log(formData.get('is_usable'))
        const data = {
            fk_user: formData.get('fk_user'),
            fK_voucher: formData.get('fk_voucher'),
            is_usable: formData.get('is_usable'),

        };
        try {
            const response = await fetch('http://localhost:8081/insertOwnedVoucher', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    // 

    return (
        <main className="flex-1 flex mt-16 w-full px-80">
            <div className="flex-1 flex flex-col">
                <div className="md:wrapper">
                    <ProductDetailShow picname={itemImage} productName={itemName} productPrice={itemPrice} productItemInclude={itemInclude} productItemClassification={itemType}></ProductDetailShow>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400 mt-8">
                    </div>
                    <ProductDetailDesc descriptionText={descriptionText}></ProductDetailDesc>
                </div>
            </div>
            {/*  
            <form method="POST" onSubmit={handleSubmit}>
                <input type="number" className="fk_user" id="fk_user" name="fk_user" placeholder="User Id" required />
                <input type="number" className="fk_voucher" id="fk_voucher" name="fk_voucher" placeholder="voucher id" required />
                <input type="number" className="is_usable" id="is_usable" name="is_usable" placeholder="usable" required />
                <button type="submit">Submit</button>
            </form>
           */}
        </main>

    )
}

export default ProductDetails