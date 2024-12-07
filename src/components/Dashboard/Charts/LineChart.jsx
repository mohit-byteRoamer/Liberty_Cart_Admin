/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { getDashboardLineActionLoad } from "../../../redux/action/dashboard_action";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { Spin } from "antd";

function LineChart() {
  const dispatch = useDispatch();
  const { getDashboardLineData, getDashboardLineLoader } = useSelector((state) => state?.DashboardReducer);
  const { discount, productsCount, revenue, usersCount } = getDashboardLineData || {};
  console.log("discount", discount);
  console.log("productsCount", productsCount);
  console.log("revenue", revenue);
  console.log("usersCount", usersCount);

  useEffect(() => {
    dispatch(getDashboardLineActionLoad());
  }, []);

  const chartOptions = {
    chart: { id: "line-chart", toolbar: { show: true } },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    stroke: { curve: "smooth" },
    markers: { size: 5 },
    title: { text: "Monthly Wise", align: "center" },
  };

  const series = [
    { name: "discount", data: discount || [] },
    { name: "productsCount", data: productsCount || [] },
    { name: "revenue", data: revenue || [] },
    { name: "usersCount", data: usersCount || [] },
  ];

  return (
    <div>
      {getDashboardLineLoader ? (
        <div className="border flex justify-center items-center h-[84vh]">
          <Spin size="large" />
        </div>
      ) : (
        <Chart options={chartOptions} series={series} type="line" height={500} />
      )}
    </div>
  );
}

export default LineChart;
