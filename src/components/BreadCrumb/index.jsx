import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
   const location = useLocation();
   const pathNames = location.pathname.split("/").filter((i) => i);

   // Helper function to capitalize each breadcrumb title
   const capatilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

   // Check if a path segment is numeric (assumed to be an ID) and exclude it
   const filteredPathNames = pathNames.filter(
      (name) => isNaN(name) && !/^[0-9a-fA-F]{24}$/.test(name)
   );
   

   return (
      <Breadcrumb
         className="p-1 bg-white rounded-lg border-t shadow-sm"
         items={[
            {
               title: (
                  <Link to="/">
                     <HomeOutlined />
                  </Link>
               ),
               key: "home",
            },
            ...filteredPathNames.map((name, index) => {
               const routeTo = `/${filteredPathNames.slice(0, index + 1).join("/")}`;
               const isLast = index === filteredPathNames.length - 1;
               return {
                  title: isLast ? capatilize(name) : <Link to={routeTo}>{capatilize(name)}</Link>,
                  key: index,
               };
            }),
         ]}
      />
   );
};

export default BreadCrumb;