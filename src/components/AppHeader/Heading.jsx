import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../Buttons/LogOutBtn";
import { Popover } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxCodesandboxLogo } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbShoppingCartHeart } from "react-icons/tb";

export function Heading() {
   const [isDarkMode, setIsDarkMode] = useState(false);
//    const user = JSON.parse(localStorage.getItem("user"))
   

   // Add a check if logInUser is undefined or null
//    const avatar = user?.avatar;
//    const fullName = user?.fullName;
//    const email = user?.email;
//    const userName = user?.userName;

   useEffect(() => {
      if (isDarkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [isDarkMode]);

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };

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

   const content = (
      <div className="space-y-3">
         <div>
            <ul className="w-56 space-y-2">
               <li className="border-b-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
                  <Link className="block w-full h-full p-2 hover:shadow-md" to={"/profile"}>
                     {title}
                  </Link>
               </li>
               <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
                  <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={"/profile"}>
                     <RxCodesandboxLogo />
                     Order
                  </Link>
               </li>
               <li className="border-b-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
                  <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={"/order"}>
                     <TbShoppingCartHeart />
                     WishList
                  </Link>
               </li>
               <li className="text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
                  <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={"/suggestion"}>
                     <HiOutlineUserGroup />
                     Suggestion
                  </Link>
               </li>
               <li className="border-b-2 text-base font-semibold hover:bg-slate-100 cursor-pointer rounded-md">
                  <Link className="flex items-center gap-2 p-2 hover:shadow-md" to={"/help"}>
                     <IoIosHelpCircleOutline />
                     Help
                  </Link>
               </li>
            </ul>
         </div>
         <div>
            <LogOutBtn />
         </div>
      </div>
   );

   return (
      <>
         <div className="bg-black w-full text-white text-sm py-1">
            <div className="flex items-center justify-between px-2">
               <div>
                  <button
                     onClick={toggleDarkMode}
                     className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded">
                     {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
               </div>
               <div>
                  <h1 className="text-center">
                     Summer Sale For All Suits And Free Express Delivery - OFF 50%!{" "}
                     <Link to={"/shop_now"}>
                        <span className="font-bold underline cursor-pointer hover:text-blue-400">
                           ShopNow!
                        </span>
                     </Link>
                  </h1>
               </div>
               <Popover
                  trigger="click"
                  className="popover rounded-full overflow-hidden flex items-center gap-2 cursor-pointer p-1"
                  content={content}>
                  <div>
                     {avatar ? (
                        <img
                           className="w-10 h-10 rounded-full object-cover"
                           src={avatar}
                           alt="Avatar"
                        />
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
                  </div>
                  <div>
                     <FaAngleDown />
                  </div>
               </Popover>
            </div>
         </div>
      </>
   );
}