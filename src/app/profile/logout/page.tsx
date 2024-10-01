'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Cookies from 'js-cookie'


export default function Home() {
    const router = useRouter()


    useEffect(() => {
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        Cookies.remove('token')
        Cookies.remove('username')
        router.push('/login')

    }, [])

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
            logging out your account, please wait
        </div>
    );
}


