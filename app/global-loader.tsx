'use client'
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
export default function GlobalLoader(){
    const pathname = usePathname()
    const [spinner, setSpinner] = useState(true) 

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinner(false)
        }, 700);
        return () => clearTimeout(timer) 
    }, [pathname])

    if(!spinner) return null

    return (
        <div className="fixed bg-[#f6f2f2] inset-0 flex items-center justify-center z-50">
            {/* Spinner */}
            <div className="loader"></div>
        </div>
    )
}