"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Income: 4000, Expense: 2400, },
    { name: 'Feb', Income: 3000, Expense: 1398, },
    { name: 'Mar', Income: 2000, Expense: 9800, },
    { name: 'Apr', Income: 2780, Expense: 3908, },
    { name: 'May', Income: 1890, Expense: 4800, },
    { name: 'Jun', Income: 2390, Expense: 3800, },
    { name: 'Jul', Income: 3490, Expense: 4300, },
    { name: 'Aug', Income: 3490, Expense: 4300, },
    { name: 'Sept', Income: 3490, Expense: 4300, },
    { name: 'Oct', Income: 3490, Expense: 4300, },
    { name: 'Nov', Income: 3490, Expense: 4300, },
    { name: 'Dec', Income: 3490, Expense: 4300, },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="More options" width={20} height={20} />
            </div>

            <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} tickMargin={10}/>
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} tickMargin={10}/>
                        <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
                        <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Line
                            type="monotone"
                            dataKey="Income"
                            stroke="#C3EBFA"
                            strokeWidth={3}
                        />
                        <Line
                            type="monotone"
                            dataKey="Expense"
                            stroke="#FAE27C"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FinanceChart;