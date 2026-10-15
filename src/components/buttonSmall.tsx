import { FaSquareArrowUpRight } from "react-icons/fa6";

type Props = {
  text: String;
  url: String;
};

export function ButtonSmall(props: Props) {
  return (
    <div>
      <button className="border-2 text-xs p-1 shadow-small hover:translate-y-1 hover:translate-x-1 hover:shadow-none hover:cursor-pointer transition">
        <a
          target="_blank"
          href={`${props.url}`}
          className="flex items-center gap-1"
        >
          {props.text}
          <FaSquareArrowUpRight />
        </a>
      </button>
    </div>
  );
}
