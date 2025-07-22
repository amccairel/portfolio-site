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
                      experience
                  </h2>

                  <div className="space-y-4">
                      <div>
                          <h3 className="text-xl font-semibold">software engineer</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Trust Lands Administration - State of Utah
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              sep 2023 – jun 2025
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  designed and led development of an <a href={"https://permits.trustlands.utah.gov"}
                                                                        className={"text-blue-600 hover:underline"}>
                                  online permitting system</a> for forestry and rockhounding activities, streamlining
                                  the public application process and automating manual workflows.
                              </li>
                              <li>
                                  resulted in a 400% increase in monthly permit sales and a 500% increase in monthly revenue growth in related product purchases.
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold">software developer</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Employers Insurance Group
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              jan 2023 – sep 2023
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  built an multi-factor authentication user management app with Angular, Spring Boot,
                                  and Okta, automating user authentication settings.
                              </li>
                              <li>
                                  created Java-based tools to clean orphaned files in document storage systems,
                                  improving backend performance.
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h3 className="text-xl font-semibold">software developer intern</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              Employers Insurance Group
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                              oct 2021 – dec 2022
                          </p>
                          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                              <li>
                                  migrated internal access request forms to a secure Spring/Angular app with MongoDB,
                                  reducing manual processes.
                              </li>
                              <li>
                                  developed a real-time service health dashboard with Angular + Spring to monitor uptime
                                  and alerts.
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Technical Skills Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <WrenchScrewdriverIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      technical skills
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                      <li><strong>languages:</strong> Java, C++, Python, JavaScript, HTML, CSS</li>
                      <li><strong>frameworks:</strong> Spring Boot, Vue.js, Angular, Next.js</li>
                      <li><strong>tools:</strong> IntelliJ, CLion, PyCharm, Postman, Maven, Vite, CMake</li>
                      <li><strong>cloud & devops:</strong> Git, GitHub, Google Cloud Platform, GitHub Actions</li>
                  </ul>

                  {/* Education Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      education
                  </h2>
                  <p className="text-lg font-semibold">University of Nevada, Reno</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.S. Mathematics, Minor in Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">jan 2019 – may 2023</p>

                  {/* Projects Section */}
                  <h2 className="text-3xl font-bold mt-8 mb-4 flex items-center gap-2">
                      <CodeBracketIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      projects
                  </h2>
                  <div>
                      <h3 className="text-xl font-semibold">moving average cli — C++</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                          <li>
                              built a high-performance command-line tool in C++ to process open high low close (OHLC) stock data from CSV files and compute moving averages (e.g., simple, exponential) across user-defined time windows.
                          </li>
                          <li>
                              enabled flexible analysis by allowing users to compute and export multiple simultaneous indicators (e.g., 12- and 26-day EMA), laying groundwork for financial signal modeling.
                          </li>
                          <li><a href={'https://github.com/amccairel/moving_average_cli'} className={'text-blue-600 hover:underline'}>try it out!</a></li>
                      </ul>
                      <h3 className="text-xl font-semibold mt-8">portfolio site — React/Next.js</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                          <li>
                              built a portfolio site using the React framework Next.js.
                          </li>
                          <li>
                              chosen for its ability to statically serve blog content stored in MDX files as well as
                              easily be deployed to the likes of Vercel, self-hosted, containerized, your choice.
                          </li>
                          <li>
                              modular design with a snappy user experience. supports light and dark mode.
                          </li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
  );
}
