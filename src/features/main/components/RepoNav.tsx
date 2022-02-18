import { Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, PullRequestOutlined } from "@ant-design/icons";

function RepoNav() {
  return (
    <Menu selectedKeys={[]} mode="horizontal" className="bg-transparent">
      <Menu.Item key="home" icon={<HomeOutlined />} className="repo-nav-item">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item
        key="pull-requests"
        icon={<PullRequestOutlined />}
        className="repo-nav-item"
      >
        <Link to="pull-request">Pull requests</Link>
      </Menu.Item>
    </Menu>
  );
}

export default RepoNav;
