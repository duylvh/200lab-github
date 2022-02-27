import { useQuery } from "@apollo/client";
import { Empty } from "antd";
import Readme from "@/components/Elements/Readme";
import { GetReadmeDocument } from "./repo-readme.gql.generated";

const RepoReadme = () => {
  const { data, loading } = useQuery(GetReadmeDocument);
  const markdownContent = data?.repository?.object;

  if (loading) {
    return null;
  }

  if (!markdownContent || !("text" in markdownContent && markdownContent.text)) {
    return (
      <div className="grid h-full place-items-center">
        <Empty description="No Readme" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto m-4 p-4 border-[1px] border-solid border-[#303030] rounded-lg">
      <Readme content={markdownContent.text} />
    </div>
  );
};

export default RepoReadme;
