import { useState } from "react"
import { TrashIcon } from '@radix-ui/react-icons';

import React from 'react'

interface MyProps {
    optionKey: number
}

const Input = (props: MyProps) => {

    interface Option_prop {

    }

    const delOption = () => {

    }

    console.log(props);
    return (
        <div className="flex">
            <input className="w-[15rem] h-[2.1rem] bg-slate-500/25 rounded-s-md px-2 py-1" type="text" placeholder={`option ` + props.optionKey} />
            <button className='bg-red-200 py-1 px-3 rounded-e-md hover:bg-rose-100'
                onClick={(e) => {
                    e.preventDefault()

                }
                }
            ><TrashIcon color="red" height={22} width={22} stroke="red" strokeWidth={.3} /></button>
        </div>
    )
}
export default function CreatePolls() {


    const options = []
    const [optnum, setoptnum] = useState(2)

    const inputBoxes = Array.from({ length: optnum }, (_, i) => (
        <Input optionKey={i + 1} />
    ));

    return (
        <div className="flex justify-center mt-[4rem]">
            <form className="flex flex-col gap-y-2">
                <input className='px-2 py-1 w-[17.9rem] h-10 rounded-lg bg-slate-500/25 text-center text-xl font-semibold' type="text" name="question" placeholder="Type poll question" autoComplete="off" />

                {
                    inputBoxes.map((box, key) => (
                        <div className='' key={key}>{box}</div>
                    ))
                }

                <button className='bg-amber-300 text-amber-700 font-bold px-2 py-1 rounded-md hover:bg-amber-200 delay-75 transition-all'
                    onClick={(e) => {
                        e.preventDefault()
                        setoptnum(optnum + 1)
                    }}>Add option</button>
                <button className='bg-emerald-300 text-emerald-700 font-bold px-2 py-1 rounded-md hover:bg-emerald-200 delay-75 transition-all'
                    onClick={(e) => {
                        e.preventDefault()

                    }}>Create Poll</button>
            </form>

        </div>
    )
}