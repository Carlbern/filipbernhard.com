import { useEffect, useState, useRef } from "react";
import { ProjectSection } from "../components/projectSection";
export default function Projects() {
  const universitySection = useRef(null);
  const personalSection = useRef(null);
  //const professionalSection = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [isLoading, setIsLoading]: any = useState(true);
  const [, setError]: any = useState(null);

  let [universityProjects, setUniversityProjects]: any = useState([]);
  let [personalProjects, setPersonalProjects]: any = useState([]);
  //let [professionalProjects, setProfessionalProjects]: any = useState([]);

  let url = "https://filipbernhard.com:3000";

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const university = json.filter(
            (project: any) => project.category === "university",
          );
          const personal = json.filter(
            (project: any) => project.category === "personal",
          );
          /* const professional = json.filter(
            (project: any) => project.category === "professional",
          ); */

          setUniversityProjects(university);
          setPersonalProjects(personal);
          //setProfessionalProjects(professional);
        });
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }, []);
  //Scrolls to top on page loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-5">
      {/* Top section of page */}
      <div className="flex items-center justify-center h-[100dvh]">
        {/*Outer most rectangle*/}
        <div className="flex items-center justify-center bg-orange-600 w-[90%] h-[70%] lg:w-[70%] lg:h-[70%] rounded-sm transform -translate-2 lg:-translate-10 shadow-full">
          {/*Inner rectangle*/}
          <div className="flex flex-col gap-3 bg-primary p-10 rounded-sm w-[70%] h-[70%] transform translate-0 shadow-full">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
              My Projects
            </h1>
            {/*Buttons outer div*/}
            <div className="transform lg:translate-x-25 lg:translate-y-10 lg:w-[70%] lg:h-[70%]">
              <nav className="flex flex-col lg:flex-row justify-center mt-5 gap-10">
                <a
                  className="flex items-center justify-center lg:text-xl lg:w-50 lg:h-15  p-1 border-2 transform hover:translate-1 transition cursor-pointer hover:shadow-none rounded-sm bg-purple-500 shadow-small"
                  onClick={() => scrollToSection(universitySection)}
                >
                  University
                </a>
                <a
                  className="flex items-center justify-center lg:text-xl lg:w-50 lg:h-15 p-1 border-2 transform hover:translate-1 transition cursor-pointer hover:shadow-none rounded-sm bg-blue-500 shadow-small"
                  onClick={() => scrollToSection(personalSection)}
                >
                  Personal
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {!isLoading && (
        <div ref={universitySection}>
          <ProjectSection data={universityProjects} bgColor="bg-secondary/90" />
        </div>
      )}
      {!isLoading && (
        <div ref={personalSection}>
          <ProjectSection data={personalProjects} bgColor="bg-primary/90" />
        </div>
      )}
    </div>
  );
}
