import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { GetReadmeDocument } from "./data.gql.generated";
import remarkGfm from "remark-gfm";

const Home = () => {
  const { data, loading } = useQuery(GetReadmeDocument);

  if (loading || !data?.repository?.object || !("text" in data.repository.object)) {
    return null;
  }

  return (
    <div className="p-4 w-full flex justify-center">
      <div className="max-w-5xl p-4 border-[1px] border-solid border-[#303030] rounded-lg prose prose-invert prose-img:inline-flex prose-img:my-0 prose-p:leading-tight prose-emerald">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.repository.object.text!}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Home;
