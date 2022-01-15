import { Layout } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import SearchRepo from "../Navbar/SearchRepo";
import AccountInfo from "../Navbar/AccountInfo";

const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout min-h-screen">
      <Layout.Header className="flex items-center gap-4 px-4">
        <GithubOutlined className="text-[2rem]" />
        <SearchRepo />
        <div className="flex-auto" />
        <AccountInfo />
      </Layout.Header>
      <Layout.Content className="h-full flex flex-col">{children}</Layout.Content>
      <Layout.Footer className="text-center">©2022 Created by Duylvh</Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
