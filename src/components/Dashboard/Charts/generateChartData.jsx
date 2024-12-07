export const generateChartData = (data) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();

  // Safely destructure data or use empty arrays as defaults
  // const { ordersCount = [], productsCount = [], usersCount = [], discount = [], revenue = [] } = data || {};
  const { ordersCount = [], productsCount = [], usersCount = []} = data || {};

  // Map through the months to generate chart data
  return months
    .map((month, index) => [
      { month: `${month} ${currentYear}`, value: ordersCount[index] || 0, type: "Orders" },
      { month: `${month} ${currentYear}`, value: productsCount[index] || 0, type: "Products" },
      { month: `${month} ${currentYear}`, value: usersCount[index] || 0, type: "Users" },
      // { month: `${month} ${currentYear}`, value: discount[index] || 0, type: "Discount" },
      // { month: `${month} ${currentYear}`, value: revenue[index] || 0, type: "Revenue" },
    ])
    .flat();
};
