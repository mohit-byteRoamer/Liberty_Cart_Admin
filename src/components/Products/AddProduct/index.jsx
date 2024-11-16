import { Controller, useForm } from "react-hook-form";
import UploadImage from "../../Image";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductActionLoad } from "../../../redux/action/product_action";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiPayload = {
      name: data.name,
      description: "description",
      price: data.price,
      stock: data.stock,
      category: data.category,
      photo: data.photo,
    };
    dispatch(createProductActionLoad({ apiPayload, navigate }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md my-5 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2" htmlFor="name">
            Product Name
          </label>
          <Controller
            name="name"
            type="text"
            rules={{
              required: "Product Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 100,
                message: "Name cannot exceed 100 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s'-.()]{1,100}$/,
                message:
                  "Allows alphabetic characters, spaces, apostrophes, and hyphens, with a length between 1 and 100",
              },
            }}
            control={control}
            render={({ field }) => (
              <input {...field} className="w-full p-2 border rounded-md" type="text" placeholder="Product Name" />
            )}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2" htmlFor="price">
            Price
          </label>
          <Controller
            name="price"
            type="number"
            rules={{
              required: "Price is required",
              min: {
                value: 1,
                message: "Price must be at least 1",
              },
              max: {
                value: 10000,
                message: "Price cannot exceed 10000",
              },
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Price must be a valid number with up to 2 decimal places",
              },
            }}
            control={control}
            render={({ field }) => (
              <input {...field} className="w-full p-2 border rounded-md" min={0} type="number" placeholder="Price" />
            )}
          />
          {errors.price && <span className="text-red-500">{errors.price.message}</span>}
        </div>

        {/* Stock */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2" htmlFor="stock">
            Stock
          </label>
          <Controller
            name="stock"
            type="number"
            rules={{
              required: "Stock is required",
              min: {
                value: 1,
                message: "Price must be at least 1",
              },
              max: {
                value: 10000,
                message: "Price cannot exceed 10000",
              },
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Price must be a valid number with up to 2 decimal places",
              },
            }}
            control={control}
            render={({ field }) => (
              <input {...field} className="w-full p-2 border rounded-md" min={0} type="number" placeholder="Stock" />
            )}
          />
          {errors.stock && <span className="text-red-500">{errors.stock.message}</span>}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2" htmlFor="category">
            Category
          </label>
          <Controller
            name="category"
            type="Select"
            rules={{ required: "Category is required" }}
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded-md">
                <option value="">Select a category</option>
                <option value="Accessories">Accessories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Jewellery">Jewellery</option>
              </select>
            )}
          />
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>

        {/* Image */}
        <div className="mb-6">
          <Controller
            name="photo"
            control={control}
            rules={{
              required: "Image is required",
              validate: {
                isValidURL: (value) => (value ? true : "Uploaded image URL is invalid"),
              },
            }}
            render={({ field }) => (
              <UploadImage
                {...field}
                onChange={(imageString) => {
                  setValue("photo", imageString);
                }}
              />
            )}
          />
          {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}
        </div>

        {/* Action */}
        <div className="mt-6 flex justify-between">
          <Button type="primary" danger>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
