'use client'
import { InstagramEmbed } from 'react-social-media-embed';
// import InstagramEmbed from 'react-instagram-embed';
// import InstagramProfileEmbed from '@/components/InstagramProfileEmbed';


import Script from 'next/script'
export default function Home() {

    //get link dari main link
    // const instagramUrl = 'https://www.instagram.com/adriajon/'; // Replace with the actual Instagram post URL


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/DB0aJqTxMcR/?utm_source=ig_embed&ig_rid=4cb624ae-ae30-4e41-a709-dfb34110ab42" width={328} captioned />
            </div>
            {/* <div>
                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    clientAccessToken='123|456'
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div> */}

            {/* <h1>Instagram Profile Embed</h1>
            <InstagramProfileEmbed url={instagramUrl}></InstagramProfileEmbed> */}


        </div>

    );
}


