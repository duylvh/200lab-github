import { useQuery } from "@apollo/client";
import get from "lodash/get";
import { Empty } from "antd";
import Readme from "@/components/Elements/Readme";
import { GetReadmeDocument } from "./repo-readme.gql.generated";

const RepoReadme = () => {
  const { data, loading } = useQuery(GetReadmeDocument);
  const markdownContent = get(data, "repository.object.text", "");

  if (loading) {
    return null;
  }

  if (!markdownContent) {
    return (
      <div className="grid h-full place-items-center">
        <Empty description="No Readme" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 border-[1px] border-solid border-[#303030] rounded-lg">
      <Readme content={markdownContent} />
    </div>
  );
};

export default RepoReadme;
