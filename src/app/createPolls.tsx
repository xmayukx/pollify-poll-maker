import { ChangeEvent, ReactEventHandler, useState } from "react"
import { TrashIcon } from '@radix-ui/react-icons';
import React from 'react'

interface MyOption {
    content: string
}

export default function CreatePolls() {

    const [options, setOptions] = useState<MyOption[]>([
        {
            content: ''
        },
        {
            content: ''
        }
    ])

    const [question, setQuestion] = useState('')

    const handleQuestion = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setQuestion(value)
    }

    const handleAddOption = () => {
        setOptions([...options, { content: '' }])
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = event.target
        // console.log(name, value)
        const option = [...options]
        option[index]['content'] = value
        setOptions(option)
    }

    const handleDelOption = (index: number) => {
        const collections = [...options]
        collections.splice(index, 1)
        setOptions(collections)
    }

    return (
        <div className="flex justify-center mt-[4rem]">
            <form className="flex flex-col gap-y-2">
                <input className='px-2 py-1 w-[17.9rem] h-10 rounded-lg bg-slate-500/25 text-center text-xl font-semibold' type="text" name="question" placeholder="Type poll question" autoComplete="off" onChange={handleQuestion} value={question} />
                {
                    options.map((_op, index) => {
                        const isActive = options.length <= 2;
                        console.log(isActive)

                        return (
                            <div key={index} className="flex">
                                <input name='content' className="w-[15rem] h-[2.1rem] bg-slate-500/25 rounded-s-md px-2 py-1" type="text" placeholder={`option ` + (index + 1)} value={_op.content} onChange={(e) => { handleInput(e, index) }} />

                                <button disabled={isActive} className={isActive ? 'bg-red-200 py-1 px-3 rounded-e-md cursor-not-allowed disabled:opacity-50' : 'bg-red-200 py-1 px-3 rounded-e-md hover:bg-rose-100'}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!isActive) {
                                            handleDelOption(index)
                                        }
                                    }
                                    }
                                ><TrashIcon color="red" height={22} width={22} stroke="red" strokeWidth={.3} /></button>
                            </div>
                        )
                    })
                }

                <button className={'bg-amber-300 text-amber-800 font-bold px-2 py-1 rounded-md delay-100 transition-all ease-in '+(!(options.length <= 5)? 'opacity-50 cursor-not-allowed':'hover:bg-amber-200')}
                        onClick={(e) => {
                            e.preventDefault()
                            if (options.length <= 5) {
                                handleAddOption()
                            }
                        }}>Add option</button>

                <button className='bg-emerald-300 text-emerald-800 font-bold px-2 py-1 rounded-md hover:bg-emerald-200 delay-75 transition-all'
                    onClick={(e) => {
                        e.preventDefault()
                        console.log(question, options)
                    }}>Create Poll</button>
            </form>

        </div>
    )
}