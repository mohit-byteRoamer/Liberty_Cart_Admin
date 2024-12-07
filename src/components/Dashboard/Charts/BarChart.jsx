import { Column } from "@ant-design/plots";
import { Spin } from "antd";
import { generateChartData } from "./generateChartData";

const BarChart = ({ BarData, Loader }) => {
  const chartData = generateChartData(BarData);

  const config = {
    data: chartData,
    xField: "month", // X-axis for months
    yField: "value", // Y-axis for revenue/transactions value
    colorField: "type", // Grouped by Revenue and Transactions
    isGroup: true, // Enable grouped bars
    autoFit: true, // Makes the chart responsive
    legend: { position: "top-left" },
    xAxis: { label: { autoRotate: true } },
    yAxis: { label: { formatter: (value) => value } },
    height: 300,
  };

  return (
    <div className="relative w-full h-[300px] md:h-[300px] lg:h-[300px]">
      {Loader && (
        <div className="absolute top-0 left-0 w-full flex justify-center items-center z-10 bg-white">
          <Spin size="large" />
        </div>
      )}
      <Column {...config} />
    </div>
  );
};

export default BarChart;
