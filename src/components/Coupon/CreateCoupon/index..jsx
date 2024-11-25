/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import { RiAddLargeFill } from "react-icons/ri";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { create_Coupon_Code_Load, get_All_Coupon_Code_Load } from "../../../redux/action/coupon_action";

const CreateCoupon = () => {
  const [open, setOpen] = useState(false);
  const pageSize = 10;
  const currentPage = 1;
  const dispatch = useDispatch();
  // console.log("Order_Log", order);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      code: "",
      amount: "",
    },
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const createCouponFunction = () => {
    setOpen(false);
    dispatch(get_All_Coupon_Code_Load({ currentPage, pageSize }));
    reset({
      code: "", // Reset code field
      amount: "", // Reset amount field
    });
  };

  const onSubmit = (data) => {
    dispatch(create_Coupon_Code_Load({ data, createCouponFunction }));
  };

  return (
    <>
      <Button className="flex items-center gap-2 p-5 hover:shadow-md" type="primary" onClick={showModal}>
        <RiAddLargeFill />
        Create Coupon
      </Button>
      <Modal
        open={open}
        title={"Add New Coupon"}
        onCancel={handleCancel}
        width={400}
        style={{ top: 170 }}
        footer={null}
        className="rounded-lg">
        {
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Code */}
            <div className="mb-6">
              <label className="block text-base font-medium mb-2" htmlFor="name">
                Code
              </label>
              <Controller
                name="code"
                control={control}
                rules={{
                  required: "Code is required",
                  pattern: {
                    value: /^[a-zA-Z0-9\s'-.()]{1,100}$/u,
                    message: "Invalid coupon code",
                  },
                }}
                render={({ field }) => (
                  <input {...field} className="w-full p-2 border rounded-md" type="text" placeholder="Coupon Code" />
                )}
              />
              {errors.code && <span className="text-red-500">{errors.code.message}</span>}
            </div>
            {/* Amount */}
            <div className="mb-6">
              <label className="block text-base font-medium mb-2" htmlFor="name">
                Amount
              </label>
              <Controller
                name="amount"
                control={control}
                rules={{
                  required: "Amount is required",
                  min: {
                    value: 1,
                    message: "Amount must be at least 1",
                  },
                  max: {
                    value: 10000,
                    message: "Amount cannot exceed 10000",
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/u,
                    message: "Amount must be a valid number with up to 2 decimal places",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="w-full p-2 border rounded-md"
                    type="number"
                    min={0}
                    placeholder="Amount"
                  />
                )}
              />
              {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
            </div>
            {/* Action */}
            <div className="flex justify-between">
              <Button type="primary" htmlType="submit" className="">
                Submit
              </Button>
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>
            </div>
          </form>
        }
      </Modal>
    </>
  );
};

export default CreateCoupon;
