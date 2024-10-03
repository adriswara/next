import { FC } from "react";
import CartLeftSection from "../molecules/cartLeftSection.molecule";
import CartRightSection from "../molecules/cartRightSection.molecule";

interface ItemCartAvailableProps { grandTotalPrice: number, productName: string, productDescription: string, productQuantity: number, totalPrice: number }
const ItemCartAvailable: FC<ItemCartAvailableProps> = (props) => {
    const {
        totalPrice = 0,
        grandTotalPrice = 0,
        productName = "",
        productDescription = "",
        productQuantity = 0,
    } = props
    return (
        <main className="flex-1 flex mt-16">
            <div className="flex-1 flex flex-col">
                <div className="wrapper">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row gap-6 container mx-auto">
                            <CartLeftSection productName={productName} productDescription={productDescription} productQuantity={productQuantity} totalPrice={totalPrice}></CartLeftSection>
                            <CartRightSection totalPrice={grandTotalPrice}></CartRightSection>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ItemCartAvailable