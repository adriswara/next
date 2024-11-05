'use client'
import GetData from '@/services/getData.service';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { useRouter } from 'next/navigation';




type EmbedType = {
    id_embed: number;
    link_embed: string;
}


export default function Home() {
    const router = useRouter()

    const [data, setData] = useState<EmbedType[]>()

    const enterPost = async () => {
        if (document.getElementById("linkyabahkan")?.onclick) {
            console.log("klik yah bahkan")
        }
        // router.refresh()
        // router.push('showcase2/')
        console.log("klik yah bahkan")
    };

    useEffect(() => { GetData("getEmbed").then((resp) => setData(resp.Embeds)) }, [])
    useEffect(() => { enterPost() }, [])

    return (
        <div>
            <div onClick={() => console.log("ahbahkan")} id='bahkan' className="grid" style={{ gridTemplateColumns: "auto auto auto" }}>
                {data?.map((data: EmbedType) => (
                    <div onClick={() => enterPost()}>
                        <a onClick={() => enterPost()} id='linkyabahkan'>
                            <div onClick={() => enterPost()} className='m-2' style={{ display: 'flex', justifyContent: 'center' }}>
                                <InstagramEmbed onClick={() => enterPost()} url={data.link_embed} width={"100%"} height={450} />
                            </div>
                        </a>
                    </div>
                ))}

            </div>
            <div className='overflow-hidden'>
                <iframe src="http://localhost:3000/profile/showcase2/1/lite" className='relative -left-24'></iframe>
            </div>

        </div>

    );
}


