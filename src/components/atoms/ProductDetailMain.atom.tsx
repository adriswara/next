import GetData from "@/services/getData.service";
import { FC, useEffect, useState } from "react"
import { FormEvent } from "react"
import Cookies from 'js-cookie'
import ModalNotification from "../molecules/modalNotification.molecule";



interface ProductDetailMainProps { point_raw: number, itemId: number, productName: string, productPrice: number, productItemInclude: string, productItemClassification: number }
const ProductDetailMain: FC<ProductDetailMainProps> = (props) => {
    const {
        productName = "",
        productPrice = 0,
        productItemInclude = "What's included",
        productItemClassification = 0,
        itemId = 0,
        point_raw = 0
    } = props
    // var quantity = 1;
    const operand = 1;
    var [quantity, setQuantity] = useState<number>(1);
    const [showModal, setShowModal] = useState(false);

    // 

    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: number }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }

    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //

    useEffect(() => { datas() }, [])
    useEffect(() => { dataPointSetting() }, [])
    useEffect(() => { console.log(point_raw) }, [quantity])


    // 
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        var itemSubTotal = Number(formData.get('total_price'))
        // var rawPoint = itemSubTotal && pointSetting?.transaction ? (itemSubTotal / 100) / 100 * pointSetting?.transaction : null
        var rawPoint = point_raw && pointSetting?.transaction ? point_raw / 100 * pointSetting?.transaction : null

        const data = {
            id_item: formData.get('id_item'),
            id_user: formData.get('id_user'),
            item_type: Number(formData.get('item_type')),
            item_quantity: formData.get('item_quantity'),
            total_price: formData.get('total_price'),
            point_reward: rawPoint

        };
        try {
            const response = await fetch('http://localhost:8081/insertItemCart  ', {
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
    var totalPrice = quantity <= 0 ? productPrice * 1 : productPrice * quantity
    return (
        <div className="px-4 sm:p-0 flex flex-col justify-between">
            <div>
                <h2 className="font-semibold text-xl">{productName}</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-xl text-gray-500">Rp.{totalPrice} </div>
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
                        <div>INI TIPE{productItemClassification}</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* this */}
            <form method="POST" onSubmit={handleSubmit}>
                <input type="number" value={itemId} className="id_item hidden" id="id_item" name="id_item" placeholder="id_item" required />
                <input type="number" value={user?.id_user} className="id_user hidden" id="id_user" name="id_user" placeholder="id_user" required />
                <input type="number" value={Number(productItemClassification)} className="item_type hidden" id="item_type" name="item_type" placeholder="usable" required />
                <input type="number" value={quantity} className="item_quantity hidden" id="item_quantity" name="item_quantity" placeholder="usable" required />
                <input type="number" value={totalPrice} className="total_price hidden" id="total_price" name="total_price" placeholder="usable" required />
                <button type="submit" onClick={() => setShowModal(true)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input text-white bg-black hover:bg-black/90 hover:text-white h-10 px-4 py-2 w-full mx-auto md:mx-0 mt-3">Add to Cart</button>
            </form>
            <ModalNotification show={showModal} onClose={() => setShowModal(false)} notificationType={1} message={"Product added to cart"}></ModalNotification>
        </div>
    )
}

export default ProductDetailMain