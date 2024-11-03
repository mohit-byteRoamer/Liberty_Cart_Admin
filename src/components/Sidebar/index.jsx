import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ProductOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", key: "dashboard", icon: <HomeOutlined /> },
    { label: "Products", key: "products", icon: <ProductOutlined /> },
    { label: "Orders", key: "orders", icon: <OrderedListOutlined /> },
    { label: "Users", key: "users", icon: <UserOutlined /> },
  ];
  return (
    <div className="w-1/5 bg-white shadow-md h-full">
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{ height: "100%" }}
        className="h-full"
        items={menuItems}
      ></Menu>
    </div>
  );
};

export default Sidebar;
