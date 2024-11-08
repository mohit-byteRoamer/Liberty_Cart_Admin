/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsActionLoad } from "../../../redux/action/product_action";
import { LiaRupeeSignSolid } from "react-icons/lia";

function AllProducts() {
  const dispatch = useDispatch();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const allProducts = useSelector((state) => state?.ProductReducer);
  console.log("allProducts_Data", allProducts?.getAllProductsData?.totalPage);

  // -------------------------- UseEffect --------------------------- //
  useEffect(() => {
    dispatch(getAllProductsActionLoad(currentPage));
  }, [currentPage]);
  // ---------------------------------------------------------------- //

  // ---------------- Edit Handler Button's Function ---------------- //
  const editHandler = (record) => {
    console.log(record);
  };
  // ---------------------------------------------------------------- //

  // --------------- Delete Handler Button's Function --------------- //
  const deleteHandler = (record) => {
    console.log(record);
  };
  // ---------------------------------------------------------------- //

  // ---------------------------- Column ---------------------------- //
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

    // Product_Id
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
      title: "Product Name",
      key: "name",
      render: (text, record) => {
        const userName = record?.name.toUpperCase() || "N/A";
        return userName !== "N/A"
          ? userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
          : userName;
      },
    },

    // Category
    { title: "Category", dataIndex: "category", key: "category" },

    // Status
    { title: "Stock", dataIndex: "stock", key: "stock" },

    // Price
    {
      title: "Product Price",
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

    // Actions
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex">
          <Button
            onClick={() => editHandler(record._id)}
            type="primary"
            className="px-2 py-1 rounded mr-2"
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteHandler(record._id)}
            type="primary"
            danger
            className="px-2 py-1 rounded"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  // ---------------------------------------------------------------- //

  return (
    <div className="container mx-auto shadow-lg">
      <Table
        columns={column}
        loading={allProducts?.getAllProductsLoader}
        dataSource={allProducts?.getAllProductsData?.Products}
        rowKey={(record) => record._id}
        pagination={{
          current: currentPage,
          total: allProducts?.getAllProductsData?.totalPage * pageSize,
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
