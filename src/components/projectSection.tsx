import { ProductCard } from "./projectCard";

type Props = {
  data: Array<{ category?: string; [key: string]: any }>;
  bgColor: String;
};

export function ProjectSection(props: Props) {
  return (
    <div className={`${props.bgColor} justify-center flex flex-col`}>
      <h2 className="text-3xl font-bold mb-4 self-center">
        {(props.data[0]?.category ?? "").charAt(0).toUpperCase() +
          (props.data[0]?.category ?? "").slice(1)}
      </h2>

      {props.data.map((project: any) => (
        <div className="flex" key={project.id}>
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
  );
}
