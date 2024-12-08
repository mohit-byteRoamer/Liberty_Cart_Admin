/* eslint-disable react-hooks/exhaustive-deps */
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStatsActionLoad } from "../../../redux/action/dashboard_action";
import { Spin } from "antd";

function AreaChart() {
  const dispatch = useDispatch();
  const { getDashboardStatsData, getDashboardStatsLoader } = useSelector((state) => state?.DashboardReducer);
  // const { productCategory } = getDashboardLineData || {};
  console.log("getDashboardStatsData", getDashboardStatsData);
  // console.log("productCategory", productCategory);

  useEffect(() => {
    dispatch(getDashboardStatsActionLoad());
  }, []);

  const chartOPtions = {
    chart: { id: "pie-chart", toolbar: { show: true } },
    labels: "labels",
    title: { text: "Area Chart", align: "center" },
    xaxis: {
      type: "Commit in month",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    noData: { text: "Empty Data" },
    stroke: { curve: "smooth" },
    markers: { size: 5 },
    legend: {
      position: "bottom",
    },
  };

  const series = [{ name: "Commits", data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 350] }];

  return (
    <div>
      {getDashboardStatsLoader ? (
        <div className="border flex justify-center items-center h-[84vh]">
          <Spin size="large" />
        </div>
      ) : (
        <Chart options={chartOPtions} series={series} type="area" height={500} />
      )}
    </div>
  );
}

export default AreaChart;
