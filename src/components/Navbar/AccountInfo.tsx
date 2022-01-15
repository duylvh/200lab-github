import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const AccountInfo = () => {
  return (
    <div className="inline-flex items-center gap-2">
      <b>Duy Lee</b>
      <Avatar icon={<UserOutlined className="align-[0.1rem]" />} />
    </div>
  );
};

export default AccountInfo;
