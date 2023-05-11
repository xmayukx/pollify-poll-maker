"use client"
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import { useSelectedLayoutSegment } from 'next/navigation'
export default function NavLink({ href, children }: { href: Url, children: ReactNode }) {
    const segment = useSelectedLayoutSegment() ?? ''
    const active = href === `/${segment}`
    console.log({ href, active })
    return (
        <Link href={href} className={active ? 'py-1 px-3 my-auto bg-gray-300 font-bold rounded-lg text-gray-800 ease-in-out transition-all' : 'm-3'}>{children}</Link>
    )
}