
export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100 text-gray-800">

        <div className="max-w-3xl mx-auto p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About Me</h2>
            <p>
              I&apos;m a backend engineer with experience building scalable systems using C++, Java,
              and Python. I care about performance, clean architecture, and robust APIs.
              Currently exploring finance and trading tech.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Experience</h2>
            <p>

            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Languages: C++, Java, Python, Go</li>
              <li>Backend: REST APIs, microservices, Spring Boot, FastAPI</li>
              <li>Databases: PostgreSQL, MySQL, Redis</li>
              <li>Tools: Docker, GitHub Actions, AWS</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
            <div className="mb-4">
              <h3 className="font-bold">Moving Average CLI -- C++</h3>
              <p>
                C++ CLI tool for processing market data with moving average calculations. Backend API
                in Python for serving metrics. Designed for performance and extensibility.
              </p>
              <a href="https://github.com/amccairel/moving_average_cli" className="text-blue-600 hover:underline">
                View on GitHub
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact</h2>
            <div className="space-x-4">
              <a href="https://github.com/amccairel" className="text-blue-600 hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/alex-mccairel-b0b2b463" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="mailto:mccairelaw@gmail.com" className="text-blue-600 hover:underline">Email</a>
            </div>
          </section>
        </div>
      </main>
  );
}
