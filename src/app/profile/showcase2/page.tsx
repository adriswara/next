'use client'
import GetData from '@/services/getData.service';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import ItemEmbed from '@/components/organisms/itemEmbed.organisms';





type EmbedType = {
    id_embed: number;
    link_embed: string;
    thumbnail_embed: string;
}


export default function Home() {
    const router = useRouter()

    const [data, setData] = useState<EmbedType[]>()
    useEffect(() => { GetData("getEmbed").then((resp) => setData(resp.Embeds)) }, [])

    const enterPost = async () => {
        if (document.getElementById("linkyabahkan")?.onclick) {
            console.log("klik yah bahkan")
        }
        // router.refresh()
        // router.push('showcase2/')
        console.log("klik yah bahkan")
    };

    useEffect(() => { enterPost() }, [])
   
    return (
        <div onClick={() => console.log("ahbahkan")} id='bahkan' className="grid" style={{ gridTemplateColumns: "auto auto auto" }}>
            {data?.map((data: EmbedType) => (
               <ItemEmbed thumbnail={data.thumbnail_embed} id={data.id_embed} link={data.link_embed}></ItemEmbed>
            ))}
        </div>

    );
}


