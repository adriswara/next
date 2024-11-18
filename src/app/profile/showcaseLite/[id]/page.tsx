'use client'
import GetData from '@/services/getData.service';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';




export default function Home() {
    // get product name from link
    const pathname: string | null = usePathname()
    const selectedPost = decodeURI(pathname + "")
    // 
    const query = selectedPost
    const [post, setPost] = useState<{ id_embed: number | undefined, link_embed: string | undefined }>()
    const datas = async () => { GetData(query).then((resp => { setPost(resp.Embeds[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    const url = post?.link_embed != undefined ? post?.link_embed : "";
    return (
        <div className='m-0 left-0 top-0 flex-none'>
            <InstagramEmbed url={url} width={"100%"} height={450}/>
        </div>
    );
}


