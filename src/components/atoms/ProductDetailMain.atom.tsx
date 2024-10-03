import { FC, useState } from "react"
import { FormEvent } from "react"


interface ProductDetailMainProps { itemId: number, productName: string, productPrice: number, productItemInclude: string, productItemClassification: string }
const ProductDetailMain: FC<ProductDetailMainProps> = (props) => {
    const {
        productName = "",
        productPrice = 0,
        productItemInclude = "What's included",
        productItemClassification = "What's this",
        itemId = 0
    } = props
    // var quantity = 1;
    const operand = 1;
    var [quantity, setQuantity] = useState<number>(1);

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
        <div className="px-4 sm:p-0 flex flex-col justify-between">
            <div>
                <h2 className="font-semibold text-xl">{productName}</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-xl text-gray-500">Rp.{quantity <= 0 ? productPrice * 1 : productPrice * quantity} </div>
                    <div className="text-end">
                        <button onClick={() => setQuantity(quantity - operand)} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-full px-3 py-1">-</button>
                        <span className="px-3">
                            {quantity <= 0 ? quantity = 1 : quantity}
                        </span>
                        <button onClick={() => setQuantity(quantity + operand)} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-full px-3 py-1">+</button>
                    </div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-2 text-gray-400"></div>
                <div className="px-4 sm:p-0 flex flex-col justify-between">
                    <div className="my-2 flex flex-col gap-1">
                        <h6 className="font-normal md:font-semibold">{productItemInclude}</h6>
                        <div>{productItemClassification}</div>
                    </div>
                </div>
                <div>
                </div>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
                <input type="number" value={itemId} className="id_item" id="id_item" name="id_item" placeholder="User Id" required />
                <input type="number" className="id_user" id="id_user" name="id_user" placeholder="voucher id" required />
                <input type="number" className="item_quantity" id="item_quantity" name="item_quantity" placeholder="usable" required />
                <input type="number" className="total_price" id="total_price" name="total_price" placeholder="usable" required />
                <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white bg-black hover:bg-black/90 hover:text-white h-10 px-4 py-2 w-full mx-auto md:mx-0 mt-3">Add to Cart</button>
            </form>
        </div>
    )
}

export default ProductDetailMain