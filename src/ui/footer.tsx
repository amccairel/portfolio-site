import {EnvelopeIcon, LinkIcon} from "@heroicons/react/16/solid";

export default function Footer() {
    const socials: {name: string; url: string}[] = [
        {
            name: "GitHub",
            url: "https://github.com/amccairel"
        },
        {
            name: "LinkedIn",
            url:"https://www.linkedin.com/in/alex-mccairel-b0b2b463"
        },
        {
            name: "Email",
            url: "mailto:mccairelaw@gmail.com"
        }
    ]
    return (
        <footer className="max-w-3xl mx-auto px-6 py-8">
            <div className="px-6 py-8 flex flex-wrap items-center gap-6">
                {socials.map(social => (
                    <a href={social.url} key={social.name}
                       className="flex items-center gap-2 text-blue-800 dark:text-amber-600 hover:underline">
                        {
                            social.name === 'email' ?
                                <EnvelopeIcon className={'h-4 w-4'} /> : <LinkIcon className={'h-4 w-4'} />
                        }
                        {social.name}
                    </a>
                ))}
            </div>
        </footer>
    )
}
