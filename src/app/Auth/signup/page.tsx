export default function Signup() {
    return (
        <div className="relative top-[10rem]">
            <p className="text-center p-3">Login</p>
            <form className="flex flex-col gap-2 mx-[42rem]" autoComplete="off">
                <input type="text" name="email" placeholder="email" autoComplete="off"/>
                <input type="password" name="password" placeholder="password" autoComplete="off"/>
                <button className='bg-indigo-600 rounded-sm p-1'>log in</button>
            </form>
        </div>
    )
}