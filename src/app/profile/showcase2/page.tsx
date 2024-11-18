'use client'
import GetData from '@/services/getData.service';
import { useEffect, useState } from 'react';
import ItemEmbed from '@/components/organisms/itemEmbed.organisms';





type EmbedType = {
    id_embed: number;
    link_embed: string;
    thumbnail_embed: string;
}


export default function Home() {
    
    const [data, setData] = useState<EmbedType[]>()
    useEffect(() => { GetData("getEmbed").then((resp) => setData(resp.Embeds)) }, [])
   
    return (
        <div onClick={() => console.log("ahbahkan")} id='bahkan' className="grid" style={{ gridTemplateColumns: "auto auto auto auto" }}>
            {data?.map((data: EmbedType) => (
               <ItemEmbed thumbnail={data.thumbnail_embed} id={data.id_embed} link={data.link_embed}></ItemEmbed>
            ))}
        </div>

    );
}


