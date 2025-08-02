

export default function About() {
    return (
        <section className="px-6 py-2">
            <p className={'mb-4'}>
                I&apos;m Alex, I&apos;ve worn a lot of hats. I&apos;ve been a college dropout. When I first went, I thought I
                wanted to be chemist, the science <b>was</b> intriguing. I was an electrician for about five years
                after that. I worked on some very large projects with complex problems to tackle.
            </p>
            <p className={'mb-4'}>
                Still, at a certain point, I was yearning for more of a mental challenge in my work. I went back to
                school originally pursuing a mathematics degree, but somewhere along the way, fell in love with software.
                The mental challenge, the satisfaction of being able to see your work accomplished, the ubiquity of its
                use all around us. Chef&apos;s kiss.
            </p>
            <p className={'mb-4'}>
                Now with a mathematics degree in hand, an internship, and a couple of positions later, I can say that
                I&apos;m a software engineer. It&apos;s a path I&apos;ve explored for a few years now and plan to travel
                on for many more to come.
            </p>
            <p className="mb-4">
                Professionally, I&apos;m finding myself interested in financial and realtime systems. How to scale such
                a system. Low latency. High stakes. As far as programming languages go, I&apos;m currently exploring
                <a href={'https://go.dev'} className={'hover:underline text-blue-800 dark:text-amber-600'}> Go </a>
                and re-familiarizing myself with <a href={'https://www.cppreference.com'}
                                                    className={'hover:underline text-blue-800 dark:text-amber-600'}>
                     C/C++</a>.
            </p>
            <p className="mb-4">
                We are so much more than just our professional selves. Below are some of my hobbies and interests
                outside of work. If you share any interests, professional or lifestyle, feel free to send me a message.
            </p>
            <h2 className={'text-xl mb-4'}>Hobbies</h2>
            <h3 className={'text-lg mb-4'}>Catch me doing these:</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Skiing, steep and deep.</li>
                <li>Fly fishing, big beautiful trout and cold mountain streams.</li>
                <li>Taking some time with my dog to go outside everyday.</li>
                <li>Guitar, music, attempting to sing.</li>
            </ul>
            <h2 className={'text-xl mb-4'}>Interests</h2>
            <h3 className={'text-lg mb-4'}>Aka, things I wish I dedicated more time to:</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Cooking, love experimenting in the kitchen but lacking in recipe repertoire.</li>
                <li>Backpacking, it&apos;s been a hot summer or two since I&apos;ve done this.</li>
                <li>Some good books, I&apos;m always reading the news.</li>
                <li>Learning a new language, ya&apos;know, like the kind spoken to people, not computers.</li>
                <li>Cars, motorcycles, boats, engines are all pretty neat.</li>
            </ul>
        </section>
    );
}