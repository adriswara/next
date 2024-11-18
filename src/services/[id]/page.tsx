'use client'
import ProductDetails from '@/components/organisms/ProductDetails.organisms';
import GetData from '@/services/getData.service';
import { pages } from 'next/dist/build/templates/app-page';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';




export default function Home() {
    // get product name from link
    const pathname: string | null = usePathname()
    const selectedPost = decodeURI(pathname + "")
    console.log("link ini" + selectedPost)
    // 
    
    const query = selectedPost
    const [post, setPost] = useState<{ id_embed: number | undefined, link_embed: string | undefined }>()
    const datas = async () => { GetData(query).then((resp => { setPost(resp.Embeds[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    const url = post?.link_embed != undefined ? post?.link_embed : "";

    return (
        <div>
            <div id='bahkan dalem' className='ml-52' style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed  url={url} width={700} height={1256} captioned />
            </div>
        </div>
    );
}


