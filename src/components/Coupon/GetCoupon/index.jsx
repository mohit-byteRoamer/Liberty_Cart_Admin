/* eslint-disable react-hooks/exhaustive-deps */
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { ConstantRoutes } from "../../Route/ConstantsRoutes";
import { RiAddLargeFill } from "react-icons/ri";
import CreateCoupon from "../CreateCoupon/index.";
// import moment from "moment";
// import { LiaRupeeSignSolid } from "react-icons/lia";

function GetAllCoupons() {
  // const dispatch = useDispatch();
  // const allCouponsData = useSelector((state) => state?.OrderReducer);
  // console.log("ALL_ORDER_DATA_FETCH", allCouponsData?.getAllCouponData);

  // useEffect(() => {
  //   dispatch();
  // }, []);

  const column = [
    // Serial Number
    { title: "S.No.", key: "" },

    // Code
    { title: "Code", dataIndex: "", key: "code" },

    // Price
    { title: "Price", dataIndex: "", key: "amount" },

    // Create_Date
    { title: "Create_Date", dataIndex: "", key: "createDate" },

    // Action
    { title: "Action", dataIndex: "", key: "action" },
  ];

  return (
    <div className="container mx-auto shadow-lg flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-medium">Coupon Management</h1>
        {/* Add Product Button */}
        <CreateCoupon />
      </div>
      <Table columns={column} loading={""} dataSource={""} />
    </div>
  );
}

export default GetAllCoupons;
