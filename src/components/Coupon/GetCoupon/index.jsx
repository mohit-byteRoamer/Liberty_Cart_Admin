/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import CreateCoupon from "../CreateCoupon/index.";
import { delete_Coupon_Code_Load, get_All_Coupon_Code_Load } from "../../../redux/action/coupon_action";
import { RiDeleteBin5Fill } from "react-icons/ri";
// import moment from "moment";

function GetAllCoupons() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const dispatch = useDispatch();
  const allCouponsData = useSelector((state) => state?.CouponReducer);

  useEffect(() => {
    dispatch(get_All_Coupon_Code_Load({ currentPage, pageSize }));
  }, [currentPage]);

  const handleDelete = (id) => {
    dispatch(delete_Coupon_Code_Load({ id, deleteCouponFunction }));
  };

  const deleteCouponFunction = () => {
    dispatch(get_All_Coupon_Code_Load({ currentPage, pageSize }));
  };

  const column = [
    // Serial Number
    { title: "S.No.", key: "", render: (text, record, index) => index + 1 + pageSize * (currentPage - 1) },

    // ID
    { title: "ID", dataIndex: "_id", key: "_id" },

    // Code
    { title: "Code", dataIndex: "code", key: "code" },

    // Price
    { title: "Price", dataIndex: "amount", key: "amount" },

    // Action
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <Button
            onClick={() => {
              handleDelete(record._id);
            }}
            type="primary"
            danger>
            <RiDeleteBin5Fill className="text-base" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto shadow-lg flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-medium">Coupon Management</h1>
        {/* Add Product Button */}
        <CreateCoupon />
      </div>
      <Table
        columns={column}
        loading={allCouponsData?.getAllCouponCodeLoader}
        dataSource={allCouponsData?.getAllCouponCodeData}
        rowKey={(record) => record._id}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          showSizeChanger: false,
          total: allCouponsData?.getAllCouponCodeData?.length,
          onChange: (page) => {
            setCurrentPage(page);
          },
        }}
      />
    </div>
  );
}

export default GetAllCoupons;
