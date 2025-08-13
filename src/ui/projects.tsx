import { CodeBracketIcon } from '@heroicons/react/16/solid'
import Link from "next/link"
import { JSX } from 'react'

export default function Projects() {
    interface Project {
        name: string
        stack: string
        dates: string
        achievements: (string | JSX.Element)[]
    }

    const projects: Project[] = [
        {
            name: "Moving Average CLI",
            stack: "C++",
            dates: "Jun 2025 - Present",
            achievements: [
                "Built a high-performance command-line tool in C++ to process Open High Low Close stock data from CSV files and compute moving averages across user-defined time windows.",
                "Enabled flexible analysis by allowing users to compute and export multiple simultaneous indicators (e.g., 12- & 26-day EMA, 20 & 50-day SMA), laying groundwork for financial signal modeling.",
                "Used for analyzing short and long term price trends in stock data.",
                <><a href={'https://github.com/amccairel/moving_average_cli'} className={'text-blue-800 dark:text-amber-600 hover:underline'}>Try it out!</a></>
            ]
        },
        {
            name: "Portfolio Site",
            stack: "Next.js, TypeScript, Tailwind CSS",
            dates: "Jun 2025 - Present",
            achievements: [
                "Developed a modern portfolio and blog to showcase experience and projects I’ve worked on.",
                "Next.js chosen for the flexibility of deploying to static site generator initially, with the ability to incorporate full-stack capabilities later.",
                "Implemented a blog feature with markdown content stored in MDX files, then compiled into usable React components, allowing me to serve content dynamically and update or create content quickly.",
                <>
                    <Link href={'/blog/building-a-portfolio-site'}
                          className={'text-blue-800 dark:text-amber-600 hover:underline'}>
                        For a deeper looker on how this site was made.
                    </Link>
                </>
            ]
        }
    ]
    return (
        <section id={'projects'} className={'px-6 py-2'}>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <CodeBracketIcon className="w-6 h-6 text-blue-800 dark:text-amber-600" />
                Projects
            </h2>
            {projects.map((project) => (
                <div key={project.name} className={'mb-2'}>
                    <h3 className={'text-xl mt-4 font-semibold'}>{project.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.stack}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.dates}
                    </p>
                    <ul className={'mt-2 list-disc list-inside space-y-1'}>
                        {project.achievements.map((achievement) => (
                            <li key={achievement.toString()}>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}