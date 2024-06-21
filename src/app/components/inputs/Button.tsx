"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, ...props }: { className?: string, children: React.ReactNode }) => {
    return (
        <button className={twMerge("px-10 h-12 border rounded-lg font-semibold active:scale-95 duration-150 ease-in-out ", className)} {...props}>{children}</button>
    )
}


export default Button