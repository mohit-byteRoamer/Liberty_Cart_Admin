/* eslint-disable react/prop-types */
import { Menu } from "antd";
import { HomeOutlined, ProductOutlined, OrderedListOutlined } from "@ant-design/icons";
import { FaChartArea, FaChartLine, FaChartPie } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ConstantRoutes } from "../Route/ConstantsRoutes";
import { IoStatsChart } from "react-icons/io5";
import { path } from "framer-motion/client";

const Sidebar = ({ className }) => {
  const menuItems = [
    {
      label: "Dashboard",
      type: "group",
      key: "dashboard",
      icon: <HomeOutlined />,
      path: `${ConstantRoutes.DASHBOARD}`,
    },
    {
      label: "Chart",
      key: "chart",
      icon: <FaChartArea />,
      children: [
        {
          label: "Line Chart",
          key: "line-chart",
          icon: <FaChartLine />,
          path: `${ConstantRoutes.LINE_CHART}`,
        },
        {
          label: "Pie Chart",
          key: "pie-chart",
          icon: <FaChartPie />,
          path: `${ConstantRoutes.PIE_CHART}`,
        },
        {
          label: "Area (Stats) Chart",
          key: "area-chart",
          icon: <IoStatsChart />,
          path: `${ConstantRoutes.AREA_CHART}`,
        },
      ],
    },
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

  const menuItemsFormatted = menuItems.map((item) => ({
    label: item.label ? <Link to={item.path}>{item.label}</Link> : "Default Label",
    key: item.key || "default-key",
    icon: item.icon || <span />,
    children: item.children
      ? item.children.map((child) => ({
          label: child.label ? <Link to={child.path}>{child.label}</Link> : "Default Child Label",
          key: child.key || "default-child-key",
          icon: child.icon || <span />,
        }))
      : undefined,
    path: item.path || "default-path",
  }));

  return (
    <div className={`w-52 bg-white shadow-md ${className}`}>
      <Menu mode="vertical" className="h-full" defaultSelectedKeys={["dashboard"]} items={menuItemsFormatted} />
    </div>
  );
};

export default Sidebar;
