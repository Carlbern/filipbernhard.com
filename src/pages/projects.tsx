import { useEffect, useState, useRef } from "react";
import { ProjectSection } from "../components/projectSection";

export default function Projects() {
  const universitySection = useRef(null);
  const personalSection = useRef(null);
  const professionalSection = useRef(null);

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
  let [professionalProjects, setProfessionalProjects]: any = useState([]);

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
          const professional = json.filter(
            (project: any) => project.category === "professional",
          );

          setUniversityProjects(university);
          setPersonalProjects(personal);
          setProfessionalProjects(professional);
        });
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <div className="bg-[url('/public/assets/images/projectsHero_mobile.webp')] lg:bg-[url('/public/assets/images/projectsHero.webp')] flex items-center justify-center bg-cover bg-center h-[100dvh] lg:h-[98dvh]">
        <div className="flex  flex-col gap-3 bg-primary/90 p-10 rounded-lg">
          <h1 className="text-5xl font-bold text-white text-center">
            My Projects
          </h1>
          <div>
            <nav className="flex items-center justify-center mt-5 gap-10">
              <a
                className="cursor-pointer bg-accent hover:bg-secondary text-white px-2 rounded-lg"
                onClick={() => scrollToSection(universitySection)}
              >
                University
              </a>
              <a
                className="cursor-pointer bg-accent hover:bg-secondary text-white px-2 rounded-lg"
                onClick={() => scrollToSection(personalSection)}
              >
                Personal
              </a>
            </nav>
          </div>
        </div>
      </div>

      {!isLoading && (
        <div ref={universitySection}>
          <ProjectSection data={universityProjects} bgColor="bg-background" />
        </div>
      )}
      {!isLoading && (
        <div ref={personalSection}>
          <ProjectSection data={personalProjects} bgColor="bg-primary" />
        </div>
      )}
      {!isLoading && (
        <div ref={professionalSection}>
          <ProjectSection data={professionalProjects} bgColor="bg-background" />
        </div>
      )}
    </div>
  );
}
