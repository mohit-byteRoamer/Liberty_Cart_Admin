import { Link } from "react-router-dom";
import { Popover } from "antd";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import LogOutBtn from "../Buttons/LogOutBtn";
import { GiftOutlined, PlusSquareOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useState } from "react";
import { ConstantRoutes } from "../Route/ConstantsRoutes";
import { useDispatch } from "react-redux";
import { resetUploadImageState } from "../../redux/action/uploadImage";

export function PopOver() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  console.log("USER", user);

  // Add a check if logInUser is undefined or null
  const avatar =
    user?.avatar ||
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727265106~exp=1727265706~hmac=2b48b806a6a6340dc45204ff038df0765e3e1cdc1a49613b2f694be2d2a70add";
  const fullName = user?.fullName || "Guest";
  const email = user?.email || "guest@example.com";
  // const userName = user?.userName;

  const title = (
    <div className="flex items-center gap-2 p-1">
      <div>
        {avatar ? (
          <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt="Avatar" />
        ) : (
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=740&t=st=1727265106~exp=1727265706~hmac=2b48b806a6a6340dc45204ff038df0765e3e1cdc1a49613b2f694be2d2a70add"
            alt="Avatar"
          />
        )}
      </div>
      <div>
        <h1 className="text-base font-semibold">{fullName}</h1>
        <h1 className="text-base font-semibold">{email}</h1>
      </div>
    </div>
  );

  const handlePopoverClick = () => {
    if (!user) {
      toast.error("User is not logged in");
    } else {
      setIsPopOverOpen(!isPopOverOpen);
    }
  };

  const resetPhotoState = () => {
    dispatch(resetUploadImageState());
  };

  const content = (
    <div className="space-y-3">
      {/* Links */}
      <div>
        <ul className="w-56 space-y-2">
          {/* Profile */}
          <li className="border-b-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link className="block w-full h-full p-2 hover:shadow-md" to={ConstantRoutes.PROFILE}>
              {title}
            </Link>
          </li>
          {/* Shopping_Cart */}
          <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={ConstantRoutes.SHOPPING_CART}>
              <ShoppingCartOutlined />
              Shopping Cart
            </Link>
          </li>
          {/* Review Order */}
          <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={ConstantRoutes.REVIEW_ORDER}>
              <GiftOutlined />
              Review Order
            </Link>
          </li>
          {/* Add Product */}
          <li className="border-b-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link
              onClick={resetPhotoState}
              className="flex items-center gap-2 p-2 hover:shadow-md"
              to={ConstantRoutes.ADD_PRODUCT}>
              <PlusSquareOutlined />
              Add Products
            </Link>
          </li>
          {/* Suggestion */}
          <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={ConstantRoutes.SUGGESTION}>
              <HiOutlineUserGroup />
              Suggestion
            </Link>
          </li>
          {/* Help */}
          <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
            <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={ConstantRoutes.HELP}>
              <IoIosHelpCircleOutline />
              Help
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-t my-4"></div>

      {/* Logout Button */}
      <div>
        <LogOutBtn />
      </div>
    </div>
  );

  return (
    <div onClick={handlePopoverClick}>
      <Popover
        trigger="click"
        content={user ? content : ""}
        open={isPopOverOpen}
        className="popover rounded-full overflow-hidden flex items-center gap-2 cursor-pointer p-1">
        {/* Avatar */}
        <div>
          <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt="Avatar" />
        </div>
        {user && (
          <div>
            <h1 className="text-base font-semibold">{fullName}</h1>
          </div>
        )}
        <div>{isPopOverOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
      </Popover>
    </div>
  );
}
