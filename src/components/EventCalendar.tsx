"use client";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
    {
        id: 1,
        title: "School Open House",
        time: "12:00pm - 3:00pm",
        description: "Current students, alumni, parents and staff.",
    },
    {
        id: 2,
        title: "STEM Fair",
        time: "12:00pm - 3:00pm",
        description: "Prospective families, incoming students and community members",
    },
    {
        id: 3,
        title: "School Sports Day",
        time: "12:00pm - 3:00pm",
        description: "Students, parents and local tech/science mentors.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={30} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    < div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaPurpleLight even:border-t-lamaPurple' key={event.id} >
                        <div className="flex item-center justify-center">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default EventCalendar;
