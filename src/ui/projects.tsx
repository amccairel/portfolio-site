import { CodeBracketIcon } from '@heroicons/react/16/solid'
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
                "Built a high-performance command-line tool in C++ to process open high low close (OHLC) stock data from CSV files and compute moving averages (e.g., simple, exponential) across user-defined time windows.",
                "Enabled flexible analysis by allowing users to compute and export multiple simultaneous indicators (e.g., 12- and 26-day EMA), laying groundwork for financial signal modeling.",
                <><a href={'https://github.com/amccairel/moving_average_cli'} className={'text-blue-800 dark:text-amber-600 hover:underline'}>Try it out!</a></>
            ]
        },
        {
            name: "Portfolio Site",
            stack: "Next.js, Typescript, tailwindcss",
            dates: "Jun 2025 - Present",
            achievements: [
                "Built a portfolio site using the React framework Next.js.",
                "Chosen for its ability to statically serve blog content stored in MDX files as well as easily be deployed to the likes of Vercel, self-hosted, containerized, your choice.",
                "Modular design with a snappy user experience. supports light and dark mode."
            ]
        }
    ]
    return (
        <section id={'projects'} className={'px-6 py-8'}>
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