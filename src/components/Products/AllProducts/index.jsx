/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductActionLoad, getAllProductsActionLoad } from "../../../redux/action/product_action";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { ConstantRoutes } from "../../Route/ConstantsRoutes";
import { PlusSquareOutlined } from "@ant-design/icons";
import { resetUploadImageState } from "../../../redux/action/uploadImage";
import { RiAddLargeFill } from "react-icons/ri";

function AllProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const allProducts = useSelector((state) => state?.ProductReducer);
  console.log("allProducts_Data", allProducts?.getAllProductsData);

  // ------------ UseEffect for getAllProductsActionLoad ------------ //
  useEffect(() => {
    dispatch(getAllProductsActionLoad({ currentPage, pageSize }));
  }, [currentPage]);
  // ---------------------------------------------------------------- //

  // ---------------- Edit Handler Button's Function ---------------- //
  const editHandler = (id) => {
    navigate(`/editProduct/${id}`);
    console.log("ID", id);
  };
  // ---------------------------------------------------------------- //

  // --------------- Delete Handler Button's Function --------------- //
  const deleteHandler = (id) => {
    console.log(id, currentPage, pageSize);
    dispatch(deleteProductActionLoad({ id, currentPage, pageSize }));
  };
  // ---------------------------------------------------------------- //

  // ------------- Reset State of Upload Photo Function ------------- //
  const resetPhotoState = () => {
    dispatch(resetUploadImageState());
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

    // Image
    {
      title: "Product Image",
      dataIndex: "photo", // Make sure your product data contains an "image" field
      key: "photo",
      render: (photo, record) => <img className="w-10" src={photo} alt={record?.name} />,
    },

    // Product_Id
    { title: "Product_id", dataIndex: "_id", key: "_id" },

    // User Name
    {
      title: "Product Name",
      key: "name",
      render: (text, record) => {
        const userName = record?.name.toUpperCase() || "N/A";
        return userName !== "N/A" ? userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase() : userName;
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

    // Created At
    {
      title: "Product Created",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (text ? moment(text).format("DD/MM/YYYY | HH:mm:ss") : "Invalid Date"),
    },

    // Actions
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex">
          <Button onClick={() => editHandler(record._id)} type="primary" className="px-2 py-1 rounded mr-2">
            Edit
          </Button>
          <Button onClick={() => deleteHandler(record._id)} type="primary" danger className="px-2 py-1 rounded">
            Delete
          </Button>
        </div>
      ),
    },
  ];
  // ---------------------------------------------------------------- //

  return (
    <div className="container mx-auto shadow-lg flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-medium">Product Management</h1>
        {/* Add Product Button */}
        <Button type="primary" className="py-5">
          <Link
            onClick={resetPhotoState}
            className="flex items-center gap-2 p-2 hover:shadow-md"
            to={ConstantRoutes.ADD_PRODUCT}>
            <RiAddLargeFill />
            Add Product
          </Link>
        </Button>
      </div>
      <Table
        columns={column}
        loading={allProducts?.getAllProductsLoader}
        dataSource={allProducts?.getAllProductsData}
        rowKey={(record) => record._id}
        pagination={{
          current: currentPage,
          total: allProducts?.getAllProductsData?.totalPage * pageSize,
          onChange: (page) => {
            setCurrentPage(page);
          },
          pageSize: pageSize,
        }}
      />
    </div>
  );
}

export default AllProducts;
