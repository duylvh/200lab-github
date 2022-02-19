import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, PullRequestOutlined } from "@ant-design/icons";

function RepoNav() {
  const { pathname } = useLocation();

  return (
    <Menu selectedKeys={[pathname]} mode="horizontal" className="bg-transparent">
      <Menu.Item key="/" icon={<HomeOutlined />} className="repo-nav-item">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/pulls" icon={<PullRequestOutlined />} className="repo-nav-item">
        <Link to="/pulls">Pull requests</Link>
      </Menu.Item>
    </Menu>
  );
}

export default RepoNav;
