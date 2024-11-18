import { FC } from "react";

import Image from "next/image";



interface ItemEmbedProps { thumbnail: string, id: number, link: string}
const ItemEmbed: FC<ItemEmbedProps> = (props) => {
    const {
        thumbnail = "",
        id = 0,
        link = "",
    } = props
    const embedLink = "showcase2/" + id
    return (
        <div className="">
            <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-1 -mt-px  pb-5 ml-5 mr-5 ">
                <a href={embedLink}>
                    <Image width={500} height={300} src={thumbnail} alt={link}></Image>
                </a>
                <div className="mt-5 -mb-5 h-12 pl-3"><p className="">View Post</p></div>
            </div>
        </div>
    )
}

export default ItemEmbed