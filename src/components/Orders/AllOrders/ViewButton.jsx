/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Modal } from "antd";

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
    <>
      <Button type="primary" onClick={showModal}>
        View
      </Button>
      <Modal
        open={open}
        title={`Order ID: ${order._id || "Not Available"}`}
        onCancel={handleCancel}
        width={400}
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
              cover={
                <img className="h-52" src={product.photo} alt={product.name} />
              }
            >
              <p>
                <strong>Product Name:</strong> {product.name}
              </p>
              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${selectedOrder.total}
              </p>
            </Card>
          ))}
      </Modal>
    </>
  );
};
export default ViewButton;
