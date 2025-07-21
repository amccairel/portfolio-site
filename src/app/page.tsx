import {
    BriefcaseIcon,
    AcademicCapIcon,
    CodeBracketIcon,
    WrenchScrewdriverIcon
} from "@heroicons/react/16/solid";

export default function Home() {
  return (
      <div>
          <section id="experience" className="px-6 py-8">
              <div>
                  {/* Experience Section */}
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                      <BriefcaseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      Experience
                  </h2>

                  <div className="space-y-4">
                      <div>
                          <h3 className="text-xl font-semibold">Software Engineer</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Trust Lands Administration - State of Utah
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Sep 2023 – May 2025
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  Designed and led development of an <a href={"https://permits.trustlands.utah.gov"} className={"text-blue-600 hover:underline"}>online permitting system</a> for forestry and rockhounding activities, streamlining the public application process and automating manual workflows.
                              </li>
                              <li>
                                  Resulted in a 400% increase in monthly permit sales and a 500% increase in monthly revenue growth in related product purchases.
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold">Software Developer</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Employers Insurance Group
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Jan 2023 – Sep 2023
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  Built an MFA user management app with Angular, Spring Boot, and Okta, automating user authentication settings.
                              </li>
                              <li>
                                  Created Java-based tools to clean orphaned files in document storage systems, improving backend performance.
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Employers Insurance Group
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Oct 2021 – Dec 2022
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  Migrated internal access request forms to a secure Spring/Angular app with MongoDB, reducing manual processes.
                              </li>
                              <li>
                                  Developed a real-time service health dashboard with Angular + Spring to monitor uptime and alerts.
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Technical Skills Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      Technical Skills
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                      <li><strong>Languages:</strong> Java, C++, Python, JavaScript, HTML, CSS</li>
                      <li><strong>Frameworks:</strong> Spring Boot, Vue.js, Angular, Next.js</li>
                      <li><strong>Tools:</strong> IntelliJ, CLion, PyCharm, Postman, Maven, Vite, CMake</li>
                      <li><strong>Cloud & DevOps:</strong> Git, GitHub, Google Cloud Platform, GitHub Actions</li>
                  </ul>

                  {/* Education Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      Education
                  </h2>
                  <p className="text-lg font-semibold">University of Nevada, Reno</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.S. Mathematics, Minor in Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2019 – May 2023</p>

                  {/* Projects Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <CodeBracketIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      Projects
                  </h2>
                  <div>
                      <h3 className="text-xl font-semibold">Moving Average CLI — C++</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                          <li>
                              Built a high-performance command-line tool in C++ to process Open High Low Close stock data from CSV files and compute moving averages (e.g., simple, exponential) across user-defined time windows.
                          </li>
                          <li>
                              Enabled flexible analysis by allowing users to compute and export multiple simultaneous indicators (e.g., 12- and 26-day EMA), laying groundwork for financial signal modeling.
                          </li>
                      </ul>
                      <h3 className="text-xl font-semibold mt-8">Portfolio Site - React</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                          <li>Built a portfolio site using Next.js with Typescript.</li>
                          <li>Chosen for its ability to statically serve blog content.</li>
                          <li>Modular design with a snappy user experience.</li>
                          <li>Supports light and dark mode.</li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
  );
}
