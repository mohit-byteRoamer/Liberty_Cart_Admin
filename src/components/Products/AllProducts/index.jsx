/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsActionLoad } from "../../../redux/action/product_action";
import { LiaRupeeSignSolid } from "react-icons/lia";

function AllProducts() {
  const dispatch = useDispatch();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const allProducts = useSelector((state) => state?.ProductReducer);
  console.log(
    "ALL_PRODUCT_DATA_FETCH",
    allProducts?.getAllProductsData?.Products?.length
  );

  useEffect(() => {
    dispatch(getAllProductsActionLoad());
  }, []);

  const column = [
    // Serial Number
    {
      title: "S.No.",
      key: "serial",
      render: (text, record, index) => index + 1 + pageSize * (currentPage - 1),
    },

    // Created At
    {
      title: "Product Created Date | Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) =>
        text ? moment(text).format("DD/MM/YYYY | HH:mm:ss") : "Invalid Date",
    },

    { title: "Product_id", dataIndex: "_id", key: "_id" },

    // Updated At
    {
      title: "Product Updated | Time",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text) =>
        text ? moment(text).format("DD/MM/YYYY | HH:mm:ss") : "Invalid Date",
    },

    // User Name
    {
      title: "User Name",
      key: "name",
      render: (text, record) => {
        const userName = record?.name.toUpperCase() || "N/A";
        return userName !== "N/A"
          ? userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
          : userName;
      },
    },

    { title: "Category", dataIndex: "category", key: "category" },

    // Status
    { title: "Stock", dataIndex: "stock", key: "stock" },

    // Total
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <span className="flex items-center">
          <LiaRupeeSignSolid /> {text}
        </span>
      ),
    },

    // Image
    {
      title: "Product Image",
      dataIndex: "photo", // Make sure your product data contains an "image" field
      key: "photo",
      render: (photo, record) => (
        <img className="w-10" src={photo} alt={record?.name} />
      ),
    },
  ];

  return (
    <div className="container mx-auto shadow-lg">
      <Table
        columns={column}
        loading={allProducts?.getAllProductsLoader}
        dataSource={allProducts?.getAllProductsData?.Products}
        rowKey={(record) => record._id}
        pagination={{
          current: currentPage,
          total: allProducts?.getAllProductsData?.Products?.length,
          onChange: (page) => {
            setCurrentPage(page);
            dispatch(getAllProductsActionLoad(page));
          },
          pageSize: pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30", "40"],
        }}
      />
    </div>
  );
}

export default AllProducts;
