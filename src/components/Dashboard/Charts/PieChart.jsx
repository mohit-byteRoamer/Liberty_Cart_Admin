/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardPieActionLoad } from "../../../redux/action/dashboard_action";
import { Spin } from "antd";

function PieChart() {
  const dispatch = useDispatch();
  const { getDashboardPieData, getDashboardPieLoader } = useSelector((state) => state?.DashboardReducer);
  const { productCategory } = getDashboardPieData || {};
  console.log("getDashboardPieData", getDashboardPieData);
  console.log("productCategory", productCategory);
  const labels = productCategory?.map((item) => item.label);
  const series = productCategory?.map((item) => parseInt(item.length.replace("%","")));
  useEffect(() => {
    dispatch(getDashboardPieActionLoad());
  }, []);

  const chartOPtions = {
    chart: { id: "pie-chart", toolbar: { show: true } },
    labels: labels,
    title: { text: "Length of Product Categories", align: "center" },
    noData: { text: "Empty Data" },
    stroke: { curve: "smooth" },
    markers: { size: 5 },
    legend: {
      position: "bottom",
    },
  };
  return (
    <div>
      {getDashboardPieLoader ? (
        <div className="border flex justify-center items-center h-[84vh]">
          <Spin size="large" />
        </div>
      ) : (
        <Chart options={chartOPtions} series={series} type="pie" height={500} />
      )}
    </div>
  );
}

export default PieChart;
