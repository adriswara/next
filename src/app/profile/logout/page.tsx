'use client'
import { useRouter } from 'next/navigation';
import { useEffect,useState } from "react";
import Cookies from 'js-cookie'
import ModalLoading from '@/components/molecules/modalLoading.molecule';



export default function Home() {
    const router = useRouter()
    const [showModal, setShowModal] = useState(true);



    useEffect(() => {
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        Cookies.remove('token')
        Cookies.remove('username')
        Cookies.remove('voucheruse')
        router.push('/login')

    }, [])

    return (
        <div className="border-2 border-solid border-jonasBorder rounded-[10px] w-full h-full">
            logging out your account, please wait
            <ModalLoading show={showModal} onClose={() => setShowModal(false)}></ModalLoading>
        </div>
    );
}


