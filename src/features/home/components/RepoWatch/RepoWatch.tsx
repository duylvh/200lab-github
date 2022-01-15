import { EyeOutlined } from "@ant-design/icons";
import RepoAction from "../RepoAction";

const RepoWatch = () => {
  return (
    <RepoAction
      actionTitle="Watch"
      actionCount={100}
      icon={<EyeOutlined className="align-[0]" />}
    />
  );
};

export default RepoWatch;
