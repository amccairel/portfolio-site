import { BriefcaseIcon } from '@heroicons/react/16/solid'
import { JSX } from 'react'

export default function Experience() {
    interface Experience {
        id: number
        position: string
        company: string
        dates: string
        achievements: (JSX.Element | string)[]
    }

    const experiences: Experience[] = [
        {   id: 2,
            position: 'Software Engineer',
            company: 'Trust Lands Administration - State of Utah',
            dates: "Sep 2023 - Jun 2025",
            achievements: [
                <>Designed and led development of an <a href={`https://permits.trustlands.utah.gov`} className={`text-blue-800 dark:text-amber-600 hover:underline`}>online permitting system</a> for forestry and rockhounding activities, streamlining the public application process and automating manual workflows.</>,
                'Resulted in a 400% increase in monthly permit sales and a 500% increase in monthly revenue growth in related product purchases.'
            ]
        },
        {
            id: 1,
            position: 'Software Developer',
            company: 'Employers Insurance Company',
            dates: "Jan 2023 - Sep 2023",
            achievements: [
                "Built an multi-factor authentication user management app with Angular, Spring Boot, and Okta, automating user authentication settings.",
                "Created Java-based tools to clean orphaned files in document storage systems, improving backend performance."
            ]
        },
        {
            id: 0,
            position: 'Software Developer Intern',
            company: 'Employers Insurance Company',
            dates: "Oct 2021 - Jan 2023",
            achievements: [
                "Migrated internal access request forms to a secure Spring/Angular app with MongoDB, reducing manual processes.",
                "Created Java-based tools to clean orphaned files in document storage systems, improving backend performance."
            ]
        }
    ]

    return (
        <section id={'experience'} className={'px-6 py-6 space-y-4'}>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <BriefcaseIcon className="w-6 h-6 text-blue-800 dark:text-amber-600" />Experience
            </h2>
            {experiences.map((experience) => (
                <div key={experience.id}>
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {experience.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {experience.dates}
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                        {experience.achievements.map((achievement) => (
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