"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    { name: 'Mon', present: 40, absent: 2 },
    { name: 'Tue', present: 39, absent: 3 },
    { name: 'Wed', present: 35, absent: 7 },
    { name: 'Thur', present: 41, absent: 1 },
    { name: 'Fri', present: 42, absent: 0 },
    { name: 'Sat', present: 38, absent: 4 },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Attendance Chart</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={data}
                    barSize={18}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;