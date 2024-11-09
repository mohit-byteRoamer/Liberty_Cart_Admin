/* eslint-disable react/prop-types */
import Layout, { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/index";
import logo from "../../assets/liberty_cart_logo.jpg";
import { PopOver } from "./PopOver";

const AppHeader = ({className}) => {
  // const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Layout className={`border-b leading-none ${className}`}>
      {/* Header Start */}
      <Header className="header flex justify-between dark:bg-gray-800 dark:text-white items-center bg-white h-[70%] py-1">
        {/* LOGO Section */}
        <div className="logo w-2/12">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-14 min-w-48 cursor-pointer"
            />
          </Link>
        </div>

        {/* Pop Over */}
        <div>
          <PopOver />
        </div>
      </Header>
      <BreadCrumb />

      {/* Header End */}
    </Layout>
  );
};

export default AppHeader;
