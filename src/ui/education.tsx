import {AcademicCapIcon} from "@heroicons/react/16/solid";

export default function Education() {
    return (
        <section id={'education-section'} className={'px-6 py-8'}>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <AcademicCapIcon className="w-6 h-6 text-blue-800 dark:text-amber-600" />
                Education
            </h2>
            <p className="text-lg font-semibold">University of Nevada - Reno</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">BS Mathematics, Minor in Computer Science</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2019 – May 2023</p>
        </section>
    )
}