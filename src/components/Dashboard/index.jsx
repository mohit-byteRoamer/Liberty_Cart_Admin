import { Card } from "antd";
import {
  UserOutlined,
  OrderedListOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token", token);
  useEffect(() => {
    if (!token) {
      navigate("/admin_login");
    }
  }, [token, navigate]);

  const data = [
    {
      title: "Total Orders",
      icon: <OrderedListOutlined className="text-blue-500" />,
      counting: 10,
    },
    {
      title: "Total Products",
      icon: <ProductOutlined className="text-blue-500" />,
      counting: 100,
    },
    {
      title: "Total Users",
      icon: <UserOutlined className="text-blue-500" />,
      counting: 120,
    },
  ];

  return (
    <div className="flex-grow">
      {/* Headers */}

      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full px-2">
          <div className="grid grid-cols-3 gap-12">
            {data.map((item, index) => (
              <Card
                hoverable={true}
                key={index}
                className="shadow-sm cursor-pointer"
              >
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
