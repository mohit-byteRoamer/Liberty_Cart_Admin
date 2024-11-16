/* eslint-disable react-hooks/exhaustive-deps */
import { Controller, useForm } from "react-hook-form";
import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetailActionLoad, updateProductActionLoad } from "../../../redux/action/product_action";
import { useEffect } from "react";
import UploadImage from "../../Image";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((data) => data?.ProductReducer);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (product?.getProductDetailData) {
      reset({
        name: product?.getProductDetailData?.name || "",
        price: product?.getProductDetailData?.price || "",
        stock: product?.getProductDetailData?.stock || "",
        category: product?.getProductDetailData?.category || "",
      });
    }
  }, [product?.getProductDetailData]);

  useEffect(() => {
    dispatch(getProductDetailActionLoad(id));
  }, [id]);

  const onUpdateSubmit = (data) => {
    const updateData = {
      ...data,
      id: product?.getProductDetailData?._id,
    };
    console.log("UpdateData", updateData);
    dispatch(updateProductActionLoad({ updateData, navigate }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md my-5 dark:bg-gray-900 dark:text-white">
      <form onSubmit={handleSubmit(onUpdateSubmit)}>
        {/* Product_Name */}
        <div className="productName mt-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="productName">
            Product Name
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Product Name is required" }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        {/* Price */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="Price">
            Price
          </label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Price"
              />
            )}
          />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>

        {/* Stock */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="Stock">
            Stock
          </label>
          <Controller
            name="stock"
            control={control}
            rules={{ required: "Stock is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Stock"
              />
            )}
          />
          {errors.stock && <span className="text-red-500">{errors.stock.message}</span>}
        </div>

        {/* Category */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300" htmlFor="Category">
            Category
          </label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select
                {...field}
                showSearch
                placeholder="Select a category"
                style={{ width: "100%" }}
                filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                options={[
                  { value: "Accessories", label: "Accessories" },
                  { value: "Electronics", label: "Electronics" },
                  { value: "Clothing", label: "Clothing" },
                  { value: "Books", label: "Books" },
                  { value: "Jewellery", label: "Jewellery" },
                ]}
              />
            )}
          />
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>

        {/* Image */}
        <UploadImage />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
