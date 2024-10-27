import Layout, { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/index";
import logo from "../../assets/liberty_cart_logo.jpg";

const AppHeader = () => {
  //   const isAuthenticated = !!localStorage.getItem("token");
  //   const role = localStorage.getItem("role");

  return (
    <Layout className="border-b leading-none">
      {/* Header Start */}
      <Header className="header flex justify-between dark:bg-gray-800 dark:text-white items-center bg-white h-[70%] pt-3">
        <div className="logo w-2/12">
          <Title level={2}>
            <Link to="/">
              <img src={logo} alt="logo" className="h-14 w-52 cursor-pointer" />
            </Link>
          </Title>
        </div>
      </Header>
      <BreadCrumb />

      {/* Header End */}
    </Layout>
  );
};

export default AppHeader;
