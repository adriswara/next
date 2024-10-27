import GetData from "@/services/getData.service";
import { FC, useEffect, useState } from "react"
import { FormEvent } from "react"
import { useRouter } from 'next/navigation';

interface ItemCartProps { pointReward: number, productId: number, productName: string, productDescription: string, productQuantity: number, totalPrice: number, onChange?: (total: number) => void }
const ItemCart: FC<ItemCartProps> = (props) => {
    const { productName = "Product 1",
        productDescription = "This product is colored and second variant",
        productQuantity = 0,
        totalPrice = 0,
        productId = 0,
        pointReward = 0,
        onChange
    } = props
    //
    const router = useRouter()
    //
    var [quantity, setQuantity] = useState<number>(productQuantity);
    const operand: number = 1;
    var totalPricePerItem = quantity <= 0 ? totalPrice * 1 : totalPrice * quantity;
    // 
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //

    var tempQuantity = quantity;
    const handleSubmit = async () => {

        quantity <= 0 ? tempQuantity = 1 : tempQuantity = quantity
        // var newPoint = pointSetting?.transaction ? totalPricePerItem / 100 / 100 * pointSetting?.transaction : 0
        var newPoint = pointSetting?.transaction ? pointReward / 100 / 100 * pointSetting?.transaction : 0
        const data = {
            id_cart: Number(productId),
            item_quantity: Number(tempQuantity),
            total_price: Number(totalPricePerItem),
            point_reward: newPoint
        };
        try {
            const response = await fetch('http://localhost:8081/updateItemCartQuantity', {
                method: 'PUT',
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
    const cancelItem = async () => {
        router.refresh()
        router.push('/cart')
        const data = {
            id_cart: Number(productId),
        };
        try {
            const response = await fetch('http://localhost:8081/cartCancel/' + Number(productId), {
                method: 'DELETE',
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
    useEffect(() => { handleSubmit().then(resp => onChange ? onChange(totalPricePerItem) : {}) }, [quantity, pointSetting?.transaction])
    useEffect(() => { dataPointSetting() }, [])
    useEffect(() => { router.push("/cart") }, [productId])
    // 
    return (

        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                <div className="flex flex-col">
                    <div className="mb-2">
                        {productName}
                    </div>
                    <div>
                        <div className="text-[10px]">
                            Description : {productDescription}, point = {pointReward}
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                <button onClick={() => cancelItem()} type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r6:" data-state="closed">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-red-500 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path fill="none" d="M0 0h24v24H0V0z">
                        </path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z">
                        </path>
                    </svg>
                </button>
                <div className="flex flex-row items-center justify-end gap-2 text-sm mt-6">
                    <div>
                        <button onClick={() => setQuantity(quantity - operand)} className="rounded-full p-1 border w-6 h-6 flex items-center justify-center">
                            -
                        </button>
                    </div>
                    <div>
                        {quantity <= 0 ? quantity = 1 : quantity}
                    </div>
                    <div>
                        <button onClick={() => setQuantity(quantity + operand)} className="rounded-full p-1 border w-6 h-6 flex items-center justify-center">
                            +
                        </button>
                    </div>
                </div>
                <p className="mt-4">
                    Rp{totalPricePerItem}
                </p>
            </td>
        </tr>

    )
}

export default ItemCart