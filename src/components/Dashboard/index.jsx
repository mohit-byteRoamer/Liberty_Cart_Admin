/* eslint-disable react-hooks/exhaustive-deps */
import StatsOverview from "./StatsOverview";
import BarChart from "./Charts/BarChart";
import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboardBarActionLoad,
  getDashboardPieActionLoad,
  getDashboardStatsActionLoad,
} from "../../redux/action/dashboard_action";
import Inventory from "./Inventory";

const Dashboard = () => {
  const dispatch = useDispatch();
  // Data Fetch from Store by Selector
  const {
    getDashboardBarData,
    getDashboardBarLoader,
    getDashboardLineData,
    getDashboardLineLoader,
    getDashboardPieData,
    getDashboardPieLoader,
    getDashboardStatsData,
    getDashboardStatsLoader,
  } = useSelector((state) => state?.DashboardReducer);
  console.log("getDashboardBarData", getDashboardBarData);
  // console.log("getDashboardLineData", getDashboardLineData);
  // console.log("getDashboardStatsData", getDashboardStatsData);

  const data = [
    {
      title: "Revenue",
      icon: <StatsOverview type="circle" percent={getDashboardStatsData?.stats?.revenue} />,
      counting: Math.round(getDashboardStatsData?.count?.revenue),
    },
    {
      title: "Users",
      icon: <StatsOverview type="circle" percent={getDashboardStatsData?.stats?.user} />,
      counting: getDashboardStatsData?.count?.userCount,
    },
    {
      title: "Transactions",
      icon: <StatsOverview type="circle" percent={10} />,
      counting: 120,
    },
    {
      title: "Products",
      icon: <StatsOverview type="circle" percent={getDashboardStatsData?.stats?.product} />,
      counting: getDashboardStatsData?.count?.productCount,
    },
    {
      title: "Order",
      icon: <StatsOverview type="circle" percent={getDashboardStatsData?.stats?.order} />,
      counting: getDashboardStatsData?.count?.orderCount,
    },
  ];

  useEffect(() => {
    dispatch(getDashboardStatsActionLoad());
  }, []);

  useEffect(() => {
    dispatch(getDashboardPieActionLoad());
  }, []);

  useEffect(() => {
    dispatch(getDashboardBarActionLoad());
  }, []);

  return (
    <div className="w-full px-1 bg-slate-50">
      {/* Card */}
      <div className="grid grid-cols-5 gap-3">
        {data.map((item, index) => (
          <Card loading={getDashboardStatsLoader} hoverable={false} key={index} className="shadow-sm border-2 cursor-pointer">
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
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center w-full mt-5">
        {/* Bar Chart */}
        <div className="rounded-lg shadow-lg bg-white lg:w-[76%] w-full p-4 cursor-pointer">
          <h1 className="text-center text-2xl font-thin uppercase text-gray-500">Bar Chart</h1>
          <BarChart BarData={getDashboardBarData} Loader={getDashboardBarLoader} />
        </div>
        {/* Inventory */}
        <div className="rounded-lg shadow-lg bg-white lg:w-[22%] w-full mt-4 lg:mt-0 p-4 cursor-pointer">
          <Inventory data={getDashboardStatsData?.inventory} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
