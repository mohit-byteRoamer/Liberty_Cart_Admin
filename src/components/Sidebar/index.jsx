import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ProductOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", key: "dashboard", icon: <HomeOutlined />, path: "/" },
    {
      label: "Products",
      key: "products",
      icon: <ProductOutlined />,
      path: "/products",
    },
    {
      label: "Orders",
      key: "orders",
      icon: <OrderedListOutlined />,
      path: "/orders",
    },
    { label: "Users", key: "users", icon: <UserOutlined />, path: "/users" },
  ];
  return (
    <div className="w-1/5 bg-white shadow-md h-full">
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{ height: "100%" }}
        className="h-full"
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;
