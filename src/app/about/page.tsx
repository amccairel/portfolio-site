

export default function About() {
    return (
        <section className="px-6 py-8">
            <p className={'mb-8'}>
                i&apos;m alex, i&apos;ve worn a lot of hats. i&apos;ve been a college dropout. when i first went, i thought i
                wanted to be chemist, the science <b>was</b> intriguing. i was an electrician for about five years
                after that. i worked on some very large projects with complex problems to tackle. still, at a certain
                point, i was yearning for more of a mental challenge in my work. i went back to school originally
                pursuing a mathematics degree, but somewhere along the way, fell in love with software. the mental
                challenge, the satisfaction of being able to see your work accomplished, the ubiquity of its use all
                around us. chef&apos;s kiss. now an internship and a couple of positions later, i can say that i&apos;m
                a software engineer. it&apos;s a path i&apos;ve beaten for a few years now and plan to travel on for
                many more to come.
            </p>
            <p className="mb-8">
                professionally, i&apos;m finding myself interested in financial and realtime systems. how to scale such
                a system. low latency. high stakes. i find embedded systems interesting as well and am close to dusting
                off the ol&apos; arduino and raspberry pi to explore that avenue of software.
            </p>
            <p className="mb-8">
                we are so much more than just our professional selves. below are some of my hobbies and interests
                outside of work. if you share any interests, professional or lifestyle, feel free to send me a message.
            </p>
            <h2 className={'text-xl mb-4'}>hobbies</h2>
            <ul className="list-disc list-inside mb-4">
                <li>skiing, steep and deep</li>
                <li>fly fishing, big beautiful trout and cold mountain streams</li>
                <li>taking some time with my dog to go outside everyday</li>
                <li>guitar, music, attempting to sing</li>
            </ul>
            <h2 className={'text-xl mb-4'}>interests</h2>
            <h3 className={'text-lg mb-4'}>aka, things i wish i dedicated more time to</h3>
            <ul className="list-disc list-inside mb-4">
                <li>cooking, surprisingly talented but lacking in recipe repertoire</li>
                <li>backpacking, it&apos;s been a hot summer or two since i&apos;ve done this</li>
                <li>some good books, i&apos;m always reading the news</li>
                <li>learning a new language, ya&apos;know, like the kind spoken to people, not computers</li>
                <li>cars, motorcycles, boats, engines are pretty neat</li>
            </ul>
        </section>
    );
}