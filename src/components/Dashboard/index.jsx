import { Card } from "antd";
import Chart from "./chart";
import RevenueTransactionChart from "./RevenueTransactionChart";

const Dashboard = () => {
  const data = [
    {
      title: "Revenue",
      icon: <Chart type="circle" percent={25} />,
      counting: 100,
    },
    {
      title: "Users",
      icon: <Chart type="circle" percent={50} />,
      counting: 10,
    },
    {
      title: "Transactions",
      icon: <Chart type="circle" percent={75} />,
      counting: 120,
    },
    {
      title: "Products",
      icon: <Chart type="circle" percent={100} />,
      counting: 120,
    },
  ];

  return (
    <div className="w-full px-2 bg-slate-50">
      <div className="grid grid-cols-4 gap-8">
        {data.map((item, index) => (
          <Card hoverable={true} key={index} className="shadow-sm cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.title}</span>
                <span className="text-xl font-semibold mt-1">{item.counting}</span>
                <span className="text-sm text-gray-500">{item.counting}</span>
              </div>
              <div className="chart">{item.icon}</div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-2 p-2 rounded-md mt-5 shadow-sm hover:shadow-xl bg-white">
        <h1 className="text-center text-2xl font-thin uppercase text-gray-500">Revenue & Transactions</h1>
        <RevenueTransactionChart />
      </div>
    </div>
  );
};

export default Dashboard;
