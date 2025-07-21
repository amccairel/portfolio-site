import {EnvelopeIcon, LinkIcon} from "@heroicons/react/16/solid";

export default function Footer() {
    return (
        <footer className="max-w-3xl mx-auto px-6 py-8">
            <div className="px-6 py-8 flex flex-wrap items-center gap-6">
                <a
                    href="https://github.com/amccairel"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                    <LinkIcon className="w-5 h-5" /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/alex-mccairel-b0b2b463"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                    <LinkIcon className="w-5 h-5" /> LinkedIn
                </a>
                <a
                    href="mailto:mccairelaw@gmail.com"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                    <EnvelopeIcon className="w-5 h-5" /> Email
                </a>
            </div>
        </footer>
    )
}
