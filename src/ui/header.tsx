import Link from "next/link";

import ThemeToggle from "@/ui/theme-toggle";

export default function Header() {
    return (
        <header className="max-w-3xl mx-auto px-6 py-8">
            <nav className="flex items-center justify-between px-6 py-4 border-b-2 dark:border-stone-200 border-stone-800 ">
                <div className="text-lg font-semibold tracking-tight">
                    <Link href="/" className="hover:underline">alex.mccairel</Link>
                </div>
                <div className="flex items-center space-x-4 font-medium">
                    <Link href="/about" className="hover:underline">about</Link>
                    <Link href="/blog" className="hover:underline">blog</Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}