"use client";

import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const data = [
    {
        name: 'Total',
        count: 100,
        fill: '#f3f4f6',
    },
    {
        name: 'Girls',
        count: 45,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 55,
        fill: '#C3EBFA',
    },
];

const CountChart = () => {
    return (
        <div className="rounded-xl bg-white w-full h-full p-4 flex flex-col justify-between">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className="relative w-full h-[75%] min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar 
                            dataKey="count" 
                        />
                        <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
                    </RadialBarChart>
                </ResponsiveContainer>
                {/* Center graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <Image src="/maleFemale.png" alt="" width={50} height={50} className="opacity-20" />
                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-3 h-3 bg-[#C3EBFA] rounded-full" />
                    <h1 className="font-bold text-sm">1,234</h1>
                    <h2 className="text-xs text-gray-400">Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-3 h-3 bg-[#FAE27C] rounded-full" />
                    <h1 className="font-bold text-sm">834</h1>
                    <h2 className="text-xs text-gray-400">Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;