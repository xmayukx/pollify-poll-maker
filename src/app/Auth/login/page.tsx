"use client"
import { Suspense, useState } from "react"
import Loading from "./loading"

export default function Login() {

    const [cred, setCred] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async () => {
        console.log(cred)
        const url = 'https://pollify-backend.vercel.app/auth/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred)
        });
        console.log(response.status)
        if (response.status === 200) {
            const data = await response.json();
            console.log(data.accessToken)
            localStorage.setItem('token', data.accessToken);
            alert("Logged in and token cached successfully")
        }
        if (response.status === 400) {
            alert("username/password incorrect")
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCred((preVal) => ({ ...preVal, [name]: value }))
    }

    return (
        <div className="space-y-5 relative top-[3.5rem]">
            <p className="text-center text-4xl font-bold">Login</p>
            <Suspense fallback={<Loading />} >
                <form className="flex flex-col mx-20 lg:mx-[40rem] gap-2" autoComplete="off">
                    <input className="h-[2.1rem] bg-slate-500/25 rounded-md px-2 py-1" type="text" name="email" placeholder="email" autoComplete="off" onChange={handleChange}/>
                    <input className="h-[2.1rem] bg-slate-500/25 rounded-md px-2 py-1" type="password" name="password" placeholder="password" autoComplete="off" onChange={handleChange} />
                    <p className='text-end text-xs'>Forgot Password?</p>
                    <button className='bg-indigo-400 hover:bg-indigo-300 rounded-lg p-1 text-indigo-800 font-bold'
                        onClick={async (event) => {
                            event.preventDefault();
                            await handleSubmit();
                        }}>
                        log in
                    </button>
                </form>
            </Suspense>
        </div>
    )
}