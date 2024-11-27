import { Column } from "@ant-design/plots";

const RevenueTransactionChart = () => {
  // Data for all 12 months
  const data = [
    { month: "January", value: 30000, type: "Revenue" },
    { month: "January", value: 1500, type: "Transactions" },
    { month: "February", value: 40000, type: "Revenue" },
    { month: "February", value: 2000, type: "Transactions" },
    { month: "March", value: 50000, type: "Revenue" },
    { month: "March", value: 2500, type: "Transactions" },
    { month: "April", value: 45000, type: "Revenue" },
    { month: "April", value: 1800, type: "Transactions" },
    { month: "May", value: 55000, type: "Revenue" },
    { month: "May", value: 2300, type: "Transactions" },
    { month: "June", value: 60000, type: "Revenue" },
    { month: "June", value: 2700, type: "Transactions" },
    { month: "July", value: 65000, type: "Revenue" },
    { month: "July", value: 3000, type: "Transactions" },
    { month: "August", value: 70000, type: "Revenue" },
    { month: "August", value: 3200, type: "Transactions" },
    { month: "September", value: 75000, type: "Revenue" },
    { month: "September", value: 3500, type: "Transactions" },
    { month: "October", value: 80000, type: "Revenue" },
    { month: "October", value: 4000, type: "Transactions" },
    { month: "November", value: 85000, type: "Revenue" },
    { month: "November", value: 4500, type: "Transactions" },
    { month: "December", value: 90000, type: "Revenue" },
    { month: "December", value: 5000, type: "Transactions" },
  ];

  const config = {
    data,
    xField: "month", // X-axis for months
    yField: "value", // Y-axis for revenue/transactions value
    colorField: "type", // Grouped by Revenue and Transactions
    isGroup: true, // Enable grouped bars
    columnStyle: {
      radius: [10, 10, 0, 0], // Rounded corners for the bars
    },
    legend: {
      position: "top-left", // Legend for grouping (Revenue & Transactions)
    },
    tooltip: {
      showMarkers: false, // Remove dot markers in tooltips
      formatter: (item) => ({
        name: item.type,
        value: item.type === "Revenue" ? `$${item.value}` : item.value,
      }),
    },
    xAxis: {
      label: {
        autoRotate: true, // Auto-rotate month labels if too crowded
      },
    },
    yAxis: {
      label: {
        formatter: (value) => `$${value}`, // Show Y-axis values in dollars
      },
    },
  };

  return <Column {...config} />;
};

export default RevenueTransactionChart;
