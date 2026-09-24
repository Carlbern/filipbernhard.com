import { ProductCard } from "./projectCard";

type Props = {
  data: Array<{ category?: string; [key: string]: any }>;
  bgColor: String;
};

export function ProjectSection(props: Props) {
  return (
    <div
      className={`${props.bgColor} justify-evenly flex flex-col min-h-[100vh] p-5`}
    >
      <h2 className="text-4xl font-bold mb-4 self-center">
        {(props.data[0]?.category ?? "").charAt(0).toUpperCase() +
          (props.data[0]?.category ?? "").slice(1)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {props.data.map((project: any) => (
          <div className="flex justify-center mt-5" key={project.id}>
            <ProductCard
              title={project.title}
              imageURL={"./assets/images/" + project.imageURL}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
