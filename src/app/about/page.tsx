import Image from 'next/image'
import DaBeach from '../../../public/da-beach.jpeg'

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <Image src={DaBeach} alt="An image of the beach in Pacifica, CA."  />
            <section className="mb-8">
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About Me</h2>
                <p>
                    I&apos;m a backend engineer with experience building scalable systems using C++, Java,
                    and Python. I care about performance, clean architecture, and robust APIs.
                    Currently exploring finance and trading tech.
                </p>
            </section>
        </div>
    );
}