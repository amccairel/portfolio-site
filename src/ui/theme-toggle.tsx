'use client'

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid"

export default function ThemeToggle() {
    const [isDark, setDark] = useState(false)

    useEffect(() => {
        const root: HTMLElement = document.documentElement
        const stored: string | null = localStorage.getItem("theme")
        const prefersDark: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches

        if (stored === 'dark' || (!stored && prefersDark)) {
            root.classList.add('dark')
            setDark(true)
        } else {
            root.classList.remove('dark')
            setDark(false)
        }
    }, [])

    const toggleTheme = () => {
        const root: HTMLElement = document.documentElement
        const newTheme: string = isDark ? 'light' : 'dark'

        localStorage.setItem("theme", newTheme)
        root.classList.toggle('dark')
        setDark(!isDark)
    }

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 bg-stone-200 px-1`}
        >
          <span
              className={`absolute left-1 top-1/2 h-6 w-6 -translate-y-1/2 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  isDark ? "translate-x-6" : "translate-x-0"
              }`}
          />
            <SunIcon
                className={`h-4 w-4 text-stone-800 absolute left-2 top-1/2 transform -translate-y-1/2 ${
                    isDark ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
            />
            <MoonIcon
                className={`h-4 w-4 text-stone-800 absolute right-2 top-1/2 transform -translate-y-1/2 ${
                    isDark ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            />
        </button>
    )
}