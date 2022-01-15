import { Menu } from "antd";

function NavLinks() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Pull Requests</Menu.Item>
    </Menu>
  );
}

export default NavLinks;
