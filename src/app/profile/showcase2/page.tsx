// pages/index.tsx
import Instagram from 'instagram-web-api';
import InstagramFeed from '@/components/organisms/instagramFeed';

const client = new Instagram({
    username: process.env.IG_USERNAME!,
    password: process.env.IG_PASSWORD!,
});

// Now you can use 'client' to fetch data from Instagram.


// pages/page.tsx
export async function getStaticProps() {
    try {
        await client.login();
        const posts = await client.getPhotosByUsername({ username: 'instagram' });
        return {
            props: {
                instagramPosts: posts,
            },
        };
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        return {
            props: {
                instagramPosts: [],
            },
        };
    }
}


export default function Home(instagramPosts) {

    return (
        <InstagramFeed instagramPosts={instagramPosts}
    );
}
