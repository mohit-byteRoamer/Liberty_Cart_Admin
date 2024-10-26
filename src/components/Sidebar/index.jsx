import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  TableOutlined,
  BellOutlined,
  ProductOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white shadow-md h-full">
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{ height: "100%" }}
        className="h-full"
      >
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="profile" icon={<ProductOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="tables" icon={<OrderedListOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="notifications" icon={<UserOutlined />}>
          Users
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
