"use client";
import { format } from "date-fns";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
export default function Home() {
    //
    type pointByMonth = {
        point: number,
        month: number,
    }
    //
    const querryPBM = 'pointByMonth'
    const [pbm, setPBM] = useState<pointByMonth[]>()
    const dataPBM = async () => { GetData(querryPBM).then((resp => { setPBM(resp.pointByMonth); console.log(resp.pointByMonth) })).catch(resp => console.log(resp)) }
    useEffect(() => { dataPBM() }, [])
    // 
    const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
        ssr: false,
    });
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    const jakartaTime = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const curMonth = Number(format(jakartaTime, "mm"))

    //         labels: [month[now.getMonth() - 4], month[now.getMonth() - 3], month[now.getMonth() - 2], month[now.getMonth() - 1], month[now.getMonth()]],
    const data = {
        labels: [month[now.getMonth() - 4], month[now.getMonth() - 3], month[now.getMonth() - 2], month[now.getMonth() - 1], month[now.getMonth()]],
        datasets: [
            {
                label: 'GeeksforGeeks Line Chart',
                data: [65, 59, 80, 81, 56],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="py-6 px-6 w-full h-full border-2 border-solid border-jonasBorder rounded-[10px]">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Performance Graph</h3>
            <div className="border-gray-100 mt-2">
                <div style={{ width: '700px', height: '700px' }}>
                    <h1>Example 1: Line Chart</h1>
                    <Line data={data} />
                </div>
            </div>
        </div>
    );
}


