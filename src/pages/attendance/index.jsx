import React from 'react'
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { IoChevronBack } from "react-icons/io5";
import Link from 'next/link';

const Attendance = () => {
    function getTodoList(date) {
        const day = date.getDate();

        switch (day) {
            case 10:
                return [
                    { time: '10:30 am', title: 'Meeting' },
                    { time: '12:00 pm', title: 'Lunch' }
                ];
            case 15:
                return [
                    { time: '09:30 pm', title: 'Products Introduction Meeting' },
                    { time: '12:30 pm', title: 'Client entertaining' },
                    { time: '02:00 pm', title: 'Product design discussion' },
                    { time: '05:00 pm', title: 'Product test and acceptance' },
                    { time: '06:30 pm', title: 'Reporting' },
                    { time: '10:00 pm', title: 'Going home to walk the dog' }
                ];
            default:
                return [];
        }
    }

    function renderCell(date) {
        const list = getTodoList(date);
        console.log(list);
        const displayList = list.filter((item, index) => index < 2);

        if (list.length) {
            const moreCount = list.length - displayList.length;
            const moreItem = (
                <li>
                    <Whisper
                        placement="top"
                        trigger="click"
                        speaker={
                            <Popover>
                                {list.map((item, index) => (
                                    <p key={index}>
                                        <b>{item.time}</b> - {item.title}
                                    </p>
                                ))}
                            </Popover>
                        }
                    >
                        <a>{moreCount} more</a>
                    </Whisper>
                </li>
            );

            return (
                <ul className="calendar-todo-list">
                    {displayList.map((item, index) => (
                        <li key={index}>
                            <Badge /> <b>{item.time}</b> - {item.title}
                        </li>
                    ))}
                    {moreCount ? moreItem : null}
                </ul>
            );
        }
        return null;
    }

    return (
        <div>
            {/* <Link href={"/"} className='flex gap-1 items-center pt-2 pl-2 w-[85px] hover:underline hover:decoration-blue-500 underline-offset-2'>
                <IoChevronBack size={20} className='no-underline' />
                <div className='text-black text-[1.2rem]'>Back</div>
            </Link> */}
            <div className='text-[3rem] font-semibold w-full text-center'>Attendance</div>
            <div className='flex justify-end w-full'>
                <div className='w-[75%] mt-6 mr-6 bg-blue-200 rounded-lg border-2 border-blue-400'>
                    <Calendar bordered renderCell={renderCell} cellClassName={date => (date.getDay() % 2 ? 'bg-gray' : undefined)} />
                </div>
            </div>
        </div>
    )
}

export default Attendance
