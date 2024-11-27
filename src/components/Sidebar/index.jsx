import { Menu } from "antd";
import { HomeOutlined, ProductOutlined, OrderedListOutlined } from "@ant-design/icons";
import { RiCouponLine } from "react-icons/ri";
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
    { label: "Coupon", key: "coupon", icon: <RiCouponLine />, path: `${ConstantRoutes.ALL_COUPONS}` },
  ];
  return (
    <div className={`w-52 bg-white shadow-md ${className}`}>
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
