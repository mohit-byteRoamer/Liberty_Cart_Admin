import { Controller, useForm } from "react-hook-form";
import { Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProductActionLoad } from "../../../redux/action/product_action";
import { useEffect } from "react";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    forState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    dispatch(get)
  })

  const onUpdateSubmit = (data) => {
    console.log(data);
    // dispatch(editProductActionLoad({ id, data }));
    // reset();
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
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Stock"
              />
            )}
          />
          {errors.Stock && <span className="text-red-500">{errors.Stock.message}</span>}
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
