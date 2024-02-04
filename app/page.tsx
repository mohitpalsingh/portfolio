import Link from "next/link"
import { FaArrowDown } from 'react-icons/fa';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-900 font-sans">
      <header className="flex items-center justify-center p-6 bg-neutral-200 dark:bg-neutral-900">
        <nav className="hidden md:flex space-x-32">
          <Link className="text-neutral-900 hover:underline dark:text-neutral-50 text-lg lg:text-xl" href="#bio" style={{ letterSpacing: '2px' }}>
            Bio
          </Link>
          <Link className="text-neutral-900 hover:underline dark:text-neutral-50 text-lg lg:text-xl" href="#skills" style={{ letterSpacing: '2px' }}>
            Skills
          </Link>
          <Link className="text-neutral-900 hover:underline dark:text-neutral-50 text-lg lg:text-xl" href="#projects" style={{ letterSpacing: '2px' }}>
            Projects
          </Link>
          <Link className="text-neutral-900 hover:underline dark:text-neutral-50 text-lg lg:text-xl" href="#experience" style={{ letterSpacing: '2px' }}>
            Experience
          </Link>
          <Link className="text-neutral-900 hover:underline dark:text-neutral-50 text-lg lg:text-xl" href="#contact" style={{ letterSpacing: '2px' }}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-24 flex items-center justify-center" id="bio">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none" style={{ letterSpacing: '4px'}}>Mohit Pal Singh</h1>
                  <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                    I am a software engineer with 1+ years of experience in building and maintaining reliable and
                    scalable software. I have a deep understanding of distributed systems, data structures, and
                    algorithms. I am passionate about solving complex problems and am always eager to learn new
                    technologies.
                  </p>
                </div>
              </div>
              <img
                alt="Mohit Pal Singh"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/pfp.jpg"
                width="550"
              />
            </div>
          </div>
          <div className="absolute bottom-8">
            <p className="text-neutral-900 dark:text-neutral-400 font-cursive italic text-lg">Scroll down</p>
            <div className="mt-2 flex justify-center">
              <FaArrowDown className="text-neutral-900 dark:text-neutral-400 text-2xl" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center" id="skills">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-5xl">Technical Skills</h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  I have a strong foundation in data structures, algorithms, and software design. I am proficient in
                  several programming languages and frameworks, with a focus on backend development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl">Languages</h3>
                      <p className="text-neutral-700 dark:text-neutral-400">Javascript, C, C++, Go, Python</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl">Frameworks</h3>
                      <p className="text-neutral-700 dark:text-neutral-400">
                        Node.js, Express.js, Next.js
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <ul className="grid gap-6">
                <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl">Databases</h3>
                      <p className="text-neutral-700 dark:text-neutral-400">
                        PostgreSQL, MySQL, MongoDB, Redis
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-16 lg:py-16 max-w-8xl mx-auto grid items-start lg:grid-cols-5 lg:gap-12" id="projects">
          <div className="flex flex-col justify-center space-y-4 text-center col-span-2">
            <div className="space-y-2">
              <h2 className="text-4xl tracking-tighter md:text-5xl/tight">Projects</h2>
              <p className="max-w-[500px] mx-auto text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                Here are some of the projects I've worked on. You can find more on my GitHub profile.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                href="https://github.com/mohitpalsingh/">
                  View GitHub
              </Link>
            </div>
          </div>
          <div className="container px-4 md:px-6 col-span-3">
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
              <div className="p-6 border rounded-md shadow-sm bg-neutral-200 dark:bg-neutral-800">
                <h3 className="text-2xl">NodeJs microservices demo (Insurance management)</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  A insurance management application backend using micro-services architecture. Users can view all insurances, customers, receipts, finance team members and add a new insurance.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300 mt-4"
                  href="https://github.com/mohitpalsingh/nodejs_microservices_demo_insuranceDekho/"
                >
                  View Details
                </Link>
              </div>
              <div className="p-6 border rounded-md shadow-sm bg-neutral-200 dark:bg-neutral-800">
                <h3 className="text-2xl">Load Balancer</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  A load balancer written in go which internally uses a very basic round-robin algorithm. It serves '/' to the the following hard-coded servers: google.com, bing.com, duckduckgo.com.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300 mt-4"
                  href="https://github.com/mohitpalsingh/simpleLoadBalancer/"
                >
                  View Details
                </Link>
              </div>
              <div className="p-6 border rounded-md shadow-sm bg-neutral-200 dark:bg-neutral-800">
                <h3 className="text-2xl">HRMS</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  A HRMS tool built in Go with MongoDB to manage employee database.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300 mt-4"
                  href="https://github.com/mohitpalsingh/go-fiber-mongo-hrms/"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center" id="experience">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  I have worked in various roles in the tech industry, from systems engineer to full stack engineer. Here are
                  some of the companies I've worked for.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-8xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-start space-y-4 text-lg">
                <ul className="grid gap-6 mb-0">
                  <li className="grid gap-1">
                    <h3 className="text-xl text-center">InsuranceDekho</h3>
                    <p className="text-neutral-700 dark:text-neutral-400 text-center">Software Engineer (2023 - Present)</p>
                    <div className="border-b border-neutral-500 mb-2"></div>
                    <ul className="grid gap-3 pl-4">
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Designed and built the ONDC - Buyer App, enabling customers globally to seamlessly purchase and manage policies on the ONDC platform.</p>
                      </li>
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Developed end-to-end booking journeys for multiple lines of business (LoBs) within ITMS, an internal tool utilized by the Operations team.</p>
                      </li>
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Enhanced backend APIs in collaboration with databases for better speed and efficiency.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-start space-y-4">
                <ul className="grid gap-6 mb-0">
                  <li className="grid gap-1">
                    <h3 className="text-xl text-center">Tejas Networks</h3>
                    <p className="text-neutral-700 dark:text-neutral-400 text-center">Systems Engineer (2022 - 2023)</p>
                    <div className="border-b border-neutral-500 mb-2"></div>
                    <ul className="grid gap-3 pl-4">
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Designed and implemented Unified Upgrade (SW, FW, Config, Catalog, License) for switches to facilitate seamless upgrades to customers across the globe.</p>
                      </li>
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">30% reduction of time in upgrade reboot procedure (below 38 seconds).</p>
                      </li>
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Designed the Easy-Licensing infrastructure from scratch for quick migration to different tiers.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-start space-y-4">
                <ul className="grid gap-6 mb-0">
                  <li className="grid gap-1">
                    <h3 className="text-xl text-center">Tejas Networks</h3>
                    <p className="text-neutral-700 dark:text-neutral-400 text-center">Software Engineer Intern (2022)</p>
                    <div className="border-b border-neutral-500 mb-2"></div>
                    <ul className="grid gap-3 pl-4">
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Designed and implemented MD5 hash utility to display the software build’s MD5-Digest and to verify the authenticity and integrity of the build that is running on the hardware.</p>
                      </li>
                      <li>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">Implemented Telnet, SNTP and DHCP Relay utilities to work on IPv6 interfaces.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center" id="contact">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter md:text-4xl/tight">Contact Me</h2>
              <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                If you'd like to get in touch, feel free to email me at mohitpalsingh239@gmail.com.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                href="https://mohitpalsingh.hashnode.dev/"
              >
                My Blog
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                href="https://www.linkedin.com/in/mohit-pal-singh/"
              >
                LinkedIn
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                href="https://twitter.com/mohit_pal_singh/"
              >
                Twitter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center h-14 border-t bg-neutral-200 dark:bg-neutral-900">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2024 Mohit Pal Singh</p>
      </footer>
    </div>
  )
}
