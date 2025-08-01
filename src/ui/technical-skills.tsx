import {WrenchScrewdriverIcon} from "@heroicons/react/16/solid";

export default function TechnicalSkills() {
    return (
        <section id={'technical-section'} className={'px-6 py-8'}>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <WrenchScrewdriverIcon className="w-6 h-6 text-blue-800 dark:text-amber-600" />
                Technical Skills
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                <li><strong>Languages:</strong> Java, C++, Python, Go, TypeScript</li>
                <li><strong>Frameworks:</strong> Spring, Vue.js, Angular, Next.js</li>
                <li><strong>Tools:</strong> IntelliJ, CLion, PyCharm, Postman, Maven, Vite, CMake</li>
                <li><strong>Cloud & DevOps:</strong> Git, GitHub, Google Cloud Platform, GitHub Actions</li>
            </ul>
        </section>
    )
}