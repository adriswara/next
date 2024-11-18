import { FC } from "react";

import Image from "next/image";



interface ItemEmbedProps { thumbnail: string, id: number, link: string }
const ItemEmbed: FC<ItemEmbedProps> = (props) => {
    const {
        thumbnail = "",
        id = 0,
        link = "",
    } = props
    const embedLink = "showcase2/" + id
    return (
        <div className="">
            <div className="border-2 border-solid border-jonasBorder rounded-[5px] grid grid-cols-1 m-5 h-auto ">
                <a href={embedLink}>
                    <Image width={1000} height={1000} src={thumbnail} alt={link}></Image>
                </a>
                <div className="h-12 bg-blue-600"> <a href={embedLink}> <p className="text-center mt-2.5 m-auto text-white">View Post</p></a></div>
            </div>
        </div>
    )
}

export default ItemEmbed