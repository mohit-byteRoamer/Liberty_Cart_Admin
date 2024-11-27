/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Modal } from "antd";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Meta from "antd/es/card/Meta";

const ViewButton = ({ order }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  // console.log("Order_Log", order);

  const showModal = () => {
    setSelectedOrder(order);
    setOpen(true);
    console.log("Order: ", order);
  };

  console.log("selectedOrder", selectedOrder);

  const handleCancel = () => {
    setOpen(false);
    setSelectedOrder(null);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        View
      </Button>
      <Modal
        open={open}
        title={`Product : ${
          selectedOrder?.orderItems[0]?.name || "No Product Name"
        }`}
        onCancel={handleCancel}
        width={650}
        style={{ top: 60 }}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        {selectedOrder &&
          selectedOrder.orderItems.map((product) => (
            <Card
              key={product._id}
              style={{ marginBottom: 16 }}
              hoverable
              className="flex w-full items-center p-5 gap-4"
              size="small"
              type="inner"
              cover={
                <img
                  className="h-80"
                  title={product.name}
                  src={product.photo}
                  alt={product.name}
                />
              }
              // title={product.name}
            >
              <Meta
                title="Product ID"
                description={product.productId}
                style={{ marginBottom: 16 }}
              />
              <div className="address">
                {/* Address */}
                <p>
                  <strong>Address:</strong> {selectedOrder.shippingInfo.address}
                </p>
                {/* City */}
                <p>
                  <strong>Address:</strong> {selectedOrder.shippingInfo.city}
                </p>
                {/* Country */}
                <p>
                  <strong>Country:</strong> {selectedOrder.shippingInfo.country}
                </p>
                {/* Pin Code */}
                <p>
                  <strong>Pin Code:</strong>{" "}
                  {selectedOrder.shippingInfo.pinCode}
                </p>
                {/* State */}
                <p>
                  <strong>State:</strong> {selectedOrder.shippingInfo.state}
                </p>
              </div>
              {/* Divider */}
              <hr className="my-4 border-gray-300" />
              <div className="priceDetail">
                {/* Quantity */}
                <p>
                  <strong>Quantity:</strong> {product.quantity}
                </p>
                {/* Price per Product */}
                <p className="flex items-center">
                  <strong>Price per Product:</strong>
                  <span className="flex items-center font-semibold text-gray-700">
                    <LiaRupeeSignSolid />
                    {product.price}
                  </span>
                </p>
                {/* Tax */}
                <p className="flex items-center">
                  <strong>Tax:</strong>
                  <span className="flex items-center font-semibold text-gray-700">
                    <LiaRupeeSignSolid />
                    {selectedOrder.tax}
                  </span>
                </p>
                {/* Discount */}
                <p className="flex items-center">
                  <strong>Discount:</strong>
                  <span className="flex items-center font-semibold text-gray-700">
                    <LiaRupeeSignSolid />
                    {selectedOrder.discount}
                  </span>
                </p>
                {/* Total Amount of Product */}
                <p className="flex items-center">
                  <strong>Total Price:</strong>
                  <span className="flex items-center font-semibold text-gray-700">
                    <LiaRupeeSignSolid />
                    {selectedOrder.total}
                  </span>
                </p>
              </div>
            </Card>
          ))}
      </Modal>
    </div>
  );
};

export default ViewButton;
