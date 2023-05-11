"use client"
import Image from 'next/image'
import { Roboto, Poppins } from 'next/font/google'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'
import { useRouter } from 'next/router'
import CreatePolls from './createPolls'

export default function Home() {

  const [authenticate, setAuthentication] = useState<boolean | null>(null)

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      const res = await fetch("https://pollify-backend.vercel.app/auth/check", {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      return res;

    } else {
      alert("No token found")
      
    }

  }
  
  useEffect(() => {
    checkAuth().then(res => {
      if (res?.status === 200) {
        setAuthentication(true) 
      } else {
        setAuthentication(false)
      }
    }).catch(err => console.log(err));

  }, [])

  return (
    <div>
      {
        authenticate === null ? <Loading /> : authenticate ? <CreatePolls/> : <p>Unauthorized</p>   
      }
    </div>
  )
}
