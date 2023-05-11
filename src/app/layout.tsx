
import Link from 'next/link'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import React, { Suspense } from "react";
import NavLink from './nav-link';
import Loading from './loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className={poppins.className}>
      <body className='max-h-screen flex flex-col bg-slate-800 text-slate-400'>
        <header className='p-7 mt-5 mb-3 mx-[5rem]'>

          <nav className='font-semibold flex flex-row gap-x-10 items-center justify-between'>
            <div className='text-3xl'>Pollify</div>
            <div className='flex gap-x-10'>
              <NavLink href='/'>CreatePolls</NavLink>
              <NavLink href='/mypolls'>Polls</NavLink>
              <NavLink href='/Auth/login'>Login</NavLink>
            </div>
          </nav>
        </header>
        <Suspense fallback={<Loading />}>
          <main className=''>
            {children}
          </main>
        </Suspense>
        <footer className='absolute bottom-0 w-full p-10 bg-slate-900 font-semibold'>
          <p className='text-center'>Developed with ❤️ by mayukh</p>
        </footer>
      </body>
    </html>
  )
}
