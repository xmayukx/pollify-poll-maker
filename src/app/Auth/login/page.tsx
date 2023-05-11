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
        <div className="">
            <p className="text-center mb-5 text-2xl">Login</p>
            <Suspense fallback={<Loading />} >
                <form className="flex flex-col mx-20 lg:mx-[40rem] gap-2" autoComplete="off">
                    <input className="rounded-sm text-black p-1" type="text" name="email" placeholder="email" autoComplete="off" onChange={handleChange} autoCorrect="off" />
                    <input className="rounded-sm text-black p-1" type="password" name="password" placeholder="password" autoComplete="off" onChange={handleChange} />
                    <p className='text-end text-xs'>Forgot Password?</p>
                    <button className='bg-indigo-600 rounded-sm p-1'
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