import { FC } from "react";
import CartLeftSection from "../molecules/cartLeftSection.molecule";
import CartRightSection from "../molecules/cartRightSection.molecule";

interface ItemCartAvailableProps { grandTotalPrice: number | null | undefined }
const ItemCartAvailable: FC<ItemCartAvailableProps> = (props) => {
    const {
        grandTotalPrice = 0,
    } = props
    return (
        <main className="flex-1 flex mt-16">
            <div className="flex-1 flex flex-col">
                <div className="wrapper">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row gap-6 container mx-auto">
                            <CartLeftSection></CartLeftSection>
                            <CartRightSection totalPrice={grandTotalPrice}></CartRightSection>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ItemCartAvailable