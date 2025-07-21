import Link from "next/link";

import ThemeToggle from "@/ui/theme-toggle";

export default function Header() {
    return (
        <header className="max-w-3xl mx-auto px-6 py-8 text-center">
            <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="text-lg font-semibold tracking-tight">
                    <Link href="/" className="hover:underline">alex mccairel</Link> |
                    software engineer
                </div>
                <div className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="hover:text-blue-500">about</Link>
                    <Link href="/blog" className="hover:text-blue-500">blog</Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}