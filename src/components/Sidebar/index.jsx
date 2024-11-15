import { Menu } from "antd";
import { HomeOutlined, UserOutlined, ProductOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ConstantRoutes } from "../Route/ConstantsRoutes";

const Sidebar = ({ className }) => {
  const menuItems = [
    { label: "Dashboard", key: "dashboard", icon: <HomeOutlined />, path: `${ConstantRoutes.DASHBOARD}` },
    {
      label: "Products",
      key: "products",
      icon: <ProductOutlined />,
      path: `${ConstantRoutes.ALL_PRODUCTS}`,
    },
    {
      label: "Orders",
      key: "orders",
      icon: <OrderedListOutlined />,
      path: `${ConstantRoutes.ALL_ORDERS}`,
    },
    { label: "Users", key: "users", icon: <UserOutlined />, path: "/users" },
  ];
  return (
    <div className={`w-1/5 bg-white shadow-md ${className}`}>
      <Menu mode="inline" defaultSelectedKeys={["dashboard"]}>
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
