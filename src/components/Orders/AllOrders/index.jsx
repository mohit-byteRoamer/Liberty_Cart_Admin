/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrderActionLoad } from "../../../redux/action/order_action";
import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import moment from "moment";
import ViewButton from "./ViewButton";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RiAddLargeFill } from "react-icons/ri";

function AllOrders() {
  const dispatch = useDispatch();
  const allOrderData = useSelector((state) => state?.OrderReducer);
  console.log("ALL_ORDER_DATA_FETCH", allOrderData?.getAllOrdersData);

  useEffect(() => {
    dispatch(getAllOrderActionLoad());
  }, []);

  const column = [
    // Serial Number
    {
      title: "S.No.",
      key: "serial",
      render: (text, record, index) => index + 1,
    },

    // Id
    { title: "Order Id", dataIndex: "_id", key: "_id" },

    // Created At
    {
      title: "Order Date | Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (text ? moment(text).format("DD/MM/YYYY | HH:mm:ss") : "Invalid Date"),
    },

    // User Name
    {
      title: "User Name",
      key: "name",
      render: (text, record) => {
        const userName = record.user?.userName.toUpperCase() || "N/A";
        return userName !== "N/A" ? userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase() : userName;
      },
    },

    {
      title: "Quantity",
      key: "name",
      render: (text, record) => record?.orderItems?.[0]?.quantity || "N/A",
    },

    // Status
    { title: "Status", dataIndex: "status", key: "status" },

    // Total
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text) => (
        <span className="flex items-center">
          <LiaRupeeSignSolid /> {text}
        </span>
      ),
    },

    // View
    {
      title: "View Order",
      key: "view",
      render: (text, record) => (
        <ViewButton order={record} /> // Pass the order details to ViewButton
      ),
    },
  ];

  return (
    <div className="container mx-auto shadow-lg flex flex-col gap-5">
      <h1 className="text-5xl font-medium">Order Management</h1>
      <Table columns={column} loading={allOrderData?.getAllOrdersLoader} dataSource={allOrderData?.getAllOrdersData} />
    </div>
  );
}

export default AllOrders;
