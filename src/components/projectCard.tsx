type Props = {
  title: string;
  imageURL: string;
  description: string;
  technologies: string[];
  githubLink: string;
  siteLink: string;
};

const colorMap: Record<string, string> = {
  react: "#61DBFB",
  typescript: "#3178C6",
  github: "#181717",
  python: "#ffe469",
  mongodb: "#4DB33D",
  expressJs: "#000000",
  nodeJs: "#339933",
  PHP: "#474A8A",
  MySQL: "#f29111",
};
const textColorMap: Record<string, string> = {
  react: "#000000",
  typescript: "#FFFFFF",
  github: "#FFFFFF",
  python: "#000000",
  expressJs: "#FFFFFF",
  nodeJs: "#FFFFFF",
  PHP: "#FFFFFF",
};

export function ProductCard(props: Props) {
  return (
    <div
      className="w-[100%] md:w-[80%] max-w-[400px] lg:m-5 p-3 rounded-md shadow-corner flex flex-col gap-2"
      style={{
        backgroundColor: colorMap[props.technologies[0]],
        color: textColorMap[props.technologies[0]],
      }}
    >
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <img
        className="w-full rounded-md shadow-small shadow-gray-500"
        src={props.imageURL}
        alt={props.title}
      />
      <p className="text-sm ">{props.description}</p>
      <div className="flex flex-row gap-4">
        {props.githubLink !== "" && (
          <a
            href={props.githubLink}
            target="_blank"
            className="text-sm text-blue-700 hover:underline"
          >
            Visit Github page
          </a>
        )}
        {props.siteLink !== "" && (
          <a
            href={props.siteLink}
            target="_blank"
            className="text-sm text-blue-700 hover:underline"
          >
            View live demo
          </a>
        )}
      </div>
      <div className="flex flex-row gap-1 justify-center my-2 max-w-[350px] flex-wrap">
        {props.technologies.map((tech: string) => (
          <div
            className={`px-2 rounded-xl border-2 border-black text-sm cursor-default`}
            style={{
              backgroundColor: colorMap[tech],
              color: textColorMap[tech],
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
