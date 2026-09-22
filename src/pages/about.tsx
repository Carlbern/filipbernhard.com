import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="p-5 md:p-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
        <div>
          <aside className="flex flex-col justify-center">
            <img
              className="self-center w-[80%] md:w-[400px] md:h-[400px] rounded-full border-3 border-secondary"
              src="./assets/images/portrait.webp"
              alt="About Me"
            />
            <div className="bg-background border-3 hover:shadow-small transition duration-500 shadow-corner border-secondary p-2 rounded-md mt-5">
              <h2 className="font-bold">Contact:</h2>
              <ul className="text-sm">
                <li className="flex items-center">
                  <FaPhone />: (+33) 7 66 12 73 99
                </li>
                <li className="flex items-center justif-center">
                  <FaEnvelope />: hello@filipbernhard.com
                </li>
                <li className="flex items-center justif-center">
                  <FaEnvelope />: filipbarrdal@gmail.com
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="pt-5 lg:p-5 flex flex-col col-span-2 gap-5 rounded-md">
          <div className="bg-background flex flex-col gap-5 border-3 hover:shadow-small transition duration-500 border-orange-600 shadow-corner p-3 md:p-5 rounded-md">
            <h1 className="text-3xl font-bold self-center">ABOUT ME</h1>
            <p className="text-sm md:text-lg">
              My name is Filip Bernhard. I'm a recent graduate in web
              development in search of opportunities in Paris so further my
              skills. Currently I'm admitted to ESIEE-IT «Le Coding Factory» and
              plan on starting my next chapter as an "alternant" student,
              meaning I'll spend 2 weeks at a company and 2 weeks in school.
              Right now I'm learning Java through different online courses, a
              language i will also continue learning in my education. Other than
              that i have ambitions learning Laravel, since i really enjoy
              working with PHP and it seems like a fantastic for future
              back-ends.
            </p>
          </div>
          <div className="bg-background flex flex-col gap-5 border-3 hover:shadow-small transition duration-500 border-purple-600 shadow-corner p-5 rounded-md">
            <h2 className="text-2xl font-bold self-center">TECH STACK</h2>
            <ul className="text-lg p-5">
              <li>
                <span className="font-bold  ">Languages:</span> HTML/CSS
                JavaScript/Typescript PHP SQL
              </li>
              <li>
                <span className="font-bold  ">Frameworks:</span> React, React
                Native
              </li>
              <li>
                <span className="font-bold  ">Other:</span> Git, Node, Linux
              </li>
            </ul>
          </div>

          <div
            className="bg-background flex flex-col gap-5 border-3 hover:shadow-small transition duration-500 border-green-600 shadow-corner
           p-5 rounded-md"
          >
            <h2 className="text-2xl font-bold self-center">
              CURRENTLY LEARNING{" "}
            </h2>
            <ul className="text-lg p-5">
              <li className="list-disc ml-5">Java</li>
              <li className="list-disc ml-5">Docker</li>
            </ul>
          </div>

          <div className="bg-background flex flex-col gap-5 border-3 hover:shadow-small transition duration-500 border-blue-600 shadow-corner p-5 rounded-md">
            <h2 className="text-2xl font-bold self-center">EDUCATION</h2>
            <ul className="flex flex-col text-lg p-5 gap-5">
              <li className="ml-5">
                🎓 Higher Education Degree, Specialization in Information
                Technology — University West 📍 Trollhättan, Sweden | 2024-2026
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
