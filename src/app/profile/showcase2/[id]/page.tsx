'use client'
import GetData from '@/services/getData.service';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import Cookies from 'js-cookie'
import { format } from "date-fns";


export default function Home() {
    // 
    const userinfo = Cookies.get('username')
    const queryName = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: Number; name_user: number; email_user: number; phone_user: number; Last_login: string, point_user: number, last_showcase: string }>()
    const datanames = async () => { GetData(queryName).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datanames() }, [])
    //
    //
    const querryPoinSetting = 'getPointSetting'
    const [pointSetting, setPointSetting] = useState<{ transaction: number, login_daily: number }>()
    const dataPointSetting = async () => { GetData(querryPoinSetting).then((resp => { setPointSetting(resp.pointsettings[0]); console.log("point setting:", resp.pointsettings) })).catch(resp => console.log(resp)) }
    //
    const handleShowcaseBonus = async () => {
        console.log("handle showcase bonus")
        const now = new Date();
        const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
        const tempLastShowcase = user?.last_showcase ? new Date(user?.last_showcase) : null;
        const lastShowcaseDate = Number(tempLastShowcase?.getDate())
        const tanggalBaru = Number(format(jakartaTime, "dd"))
        console.log("Waktu Sekarang : " + jakartaTime)
        console.log("Waktu Last Showcase : " + tempLastShowcase)
        console.log("Tanggal Last Showcase : " + lastShowcaseDate)
        console.log("Tanggal Baru : " + tanggalBaru)

        if (lastShowcaseDate >= tanggalBaru || user == undefined) {
            return
        }
        const data = {
            id_user: Number(user?.id_user),
            last_showcase: format(jakartaTime, "yyyy-MM-dd hh:mm:ss"),
        };
        try {
            const response = await fetch('http://localhost:8081/dailyshowcaseCheck', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                handlePoint()
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    //
    const handlePoint = async () => {
        var rawPoint = pointSetting?.transaction ? 10 / 100 * pointSetting?.login_daily : null
        var newPoint = rawPoint && user?.point_user ? Number(rawPoint) + Number(user?.point_user) : null
        const data = {
            id_user: Number(user?.id_user),
            point_user: newPoint
        };
        try {
            const response = await fetch('http://localhost:8081/pointTransaction', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },

            });

            if (response.ok) {
                console.log('ok')
                console.log(await response.json)
            }
            else {
                console.log("failed")
            }
        } catch (error) {
            console.log("epi error")
        }
    };
    //
    useEffect(() => { handleShowcaseBonus() }, [user])
    useEffect(() => { dataPointSetting() }, [user])
    // get post name from link
    const pathname: string | null = usePathname()
    const selectedPost = decodeURI(pathname + "") // isinya id
    // 
    const query = selectedPost
    const [post, setPost] = useState<{ id_embed: number | undefined, link_embed: string | undefined }>()
    const datas = async () => { GetData(query).then((resp => { setPost(resp.Embeds[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    const url = post?.link_embed != undefined ? post?.link_embed : "";
    return (
        <div>
            <div id='bahkan dalem' className='ml-52' style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url={url} width={700} height={1256} captioned />
            </div>
        </div>
    );
}