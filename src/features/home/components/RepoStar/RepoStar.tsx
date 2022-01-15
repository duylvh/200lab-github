import { StarOutlined } from "@ant-design/icons";
import RepoAction from "../RepoAction";

const RepoStar = () => {
  return (
    <RepoAction
      actionTitle="Star"
      actionCount={100}
      icon={<StarOutlined className="align-[0]" />}
    />
  );
};

export default RepoStar;
