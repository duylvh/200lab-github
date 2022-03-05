import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Readme = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "max-w-none prose prose-invert prose-img:inline-flex prose-img:my-0 prose-p:leading-tight prose-emerald",
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default Readme;
