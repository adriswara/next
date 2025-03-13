"use client";
import { format } from "date-fns";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
export default function Home() {
    //
    type pointByMonth = {
        reward: number,
        month: number,
    }
    //
    //
    //
    const userinfo = Cookies.get('username')
    const query = 'userGet/' + userinfo
    const [user, setUser] = useState<{ id_user: Number; name_user: number; email_user: number; phone_user: number; Last_login: string, point_user: number, first_transaction: string, last_showcase }>()
    const datas = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
    useEffect(() => { datas() }, [])
    //
    //
    const querryPBM = 'showPointByMonth/' + 2
    const [pbm, setPBM] = useState<pointByMonth[]>()
    const dataPBM = async () => { GetData(querryPBM).then((resp => { setPBM(resp.pointByMonth); console.log(resp.pointByMonth) })).catch(resp => console.log(resp)) }
    useEffect(() => { dataPBM() }, [])
    // 
    const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
        ssr: false,
    });
    const month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const curMonth = Number(format(jakartaTime, "mm"))

    //         labels: [month[now.getMonth() - 4], month[now.getMonth() - 3], month[now.getMonth() - 2], month[now.getMonth() - 1], month[now.getMonth()]],
    console.log(pbm)
    // pbm?.map((data: pointByMonth) => (month[data.month]))
    // pbm?.map((data: pointByMonth) => (month[data.point]))
    var varLabels: String[] = [];
    var varData: Number[] = [];
    pbm?.map((data: pointByMonth) => { varLabels.push(month[data.month]) });
    pbm?.map((data: pointByMonth) => { varData.push(data.reward) });
    const data = {
        labels: varLabels,
        datasets: [
            {
                label: 'Transaction Performance Bar Chart For last 5 months since first transaction',
                data: varData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 1,
            },
        ],
    };

    return (
        <div className="py-6 px-6 w-full h-full border-2 border-solid border-jonasBorder rounded-[10px]">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Performance Graph</h3>
            <div className="border-gray-100 mt-2">
                <div style={{ width: '700px', height: '700px' }}>
                    <h1>Performa transaksi dalam kategori bulan  </h1>
                    <Bar data={data} />
                </div>
            </div>
        </div>
    );
}


