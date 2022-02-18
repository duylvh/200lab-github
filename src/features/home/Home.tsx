import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { GetReadmeDocument } from "./data.gql.generated";
import remarkGfm from "remark-gfm";

const Home = () => {
  const { data, loading } = useQuery(GetReadmeDocument);

  if (loading || !data?.repository?.object) {
    return null;
  }

  if (!("text" in data.repository.object)) {
    return null;
  }

  return (
    <div className="p-4 max-w-5xl w-full flex justify-center">
      <div className="prose prose-invert max-w-none prose-img:inline-flex prose-img:my-0">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.repository.object.text!}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;
