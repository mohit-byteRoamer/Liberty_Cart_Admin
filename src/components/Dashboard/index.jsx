import { Card } from "antd";
import logo from "../../assets/liberty_cart_logo.jpg"
import {
  UserOutlined,
  OrderedListOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  const data = [
    { title: "Total Orders", icon: <OrderedListOutlined />, counting: 10 },
    { title: "Total Products", icon: <ProductOutlined />, counting: 100 },
    { title: "Total Users", icon: <UserOutlined />, counting: 120 },
  ];

  return (
    <div className="flex-grow">
      {/* Headers */}
      <div className="flex justify-between items-center py-5">
        <img src={logo} alt="logo" className="h-14 w-52 cursor-pointer" />
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded-md shadow-sm w-64"
        />
      </div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full px-2">
          <div className="grid grid-cols-3 gap-12">
            {data.map((item, index) => (
              <Card hoverable={true} key={index} className="shadow-sm cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">{item.title}</span>
                    <span className="text-2xl font-semibold mt-1">
                      {item.amount}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.counting}
                    </span>
                  </div>
                  <div className="text-3xl text-green-500">{item.icon}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 px-2 mt-5">Content</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
