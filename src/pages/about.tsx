export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/public/assets/images/homeHeroDark.webp')] bg-cover p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <aside className="flex justify-center">
          <div>
            <img
              className="w-[400px] h-[400px] rounded-full"
              src="./assets/images/portrait.webp"
              alt="About Me"
            />
            <div className="bg-primary/90 p-5 rounded-lg mt-5">
              <h2 className="font-bold">Contact:</h2>
              <ul>
                <li>
                  <span className="font-bold">Telephone:</span> (+33) 7 66 12 73
                  99
                </li>
                <li>
                  <span className="font-bold">Email:</span>{" "}
                  hello@filipbernhard.com
                </li>
                <li>
                  <span className="font-bold">Secondary email:</span>{" "}
                  filipbarrdal@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="p-5 flex flex-col col-span-2 gap-5 bg-primary/90  rounded-lg">
          <h1 className="text-3xl font-bold self-center">About me</h1>
          <p className="text-lg border-t-1 p-5">
            My name is Filip Bernhard. I'm a recent graduate in web development
            in search of opportunities in Paris so further my skills. Currently
            I'm admitted to ESIEE-IT «Le Coding Factory» and plan on starting my
            next chapter as an "alternant" student, meaning I'll spend 2 weeks
            at a company and 2 weeks in school. Right now I'm learning Java
            through different online courses, a language i will also continue
            learning in my education. Other than that i have ambitions learning
            Laravel, since i really enjoy working with PHP and it seems like a
            fantastic for future back-ends.
          </p>
          <h2 className="text-2xl font-bold self-center">Tech Stack</h2>
          <ul className="text-lg border-t-1 p-5">
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
          <h2 className="text-2xl font-bold self-center">Currently learning</h2>
          <ul className="text-lg border-t-1 p-5">
            <li className="list-disc ml-5">Java</li>
            <li className="list-disc ml-5">Docker</li>
          </ul>
          <h2 className="text-2xl font-bold self-center">Education</h2>
          <ul className="flex flex-col text-lg border-t-1 p-5 gap-5">
            <li className="ml-5">
              🎓 RNCP Niveau 6, Développement web - ESIEE-IT - La Coding Factory
              📍 Cergy, France | 2026-2028
            </li>
            <li className="ml-5">
              🎓 Higher Education Degree, specialization in information
              technology — University West 📍 Trollhättan, Sweden | 2024-2026
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
