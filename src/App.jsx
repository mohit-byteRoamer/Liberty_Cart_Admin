import "./App.css";
import Login from "./page/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AppHeader from "./components/AppHeader/Header";
import AllOrders from "./components/Orders/AllOrders";
import AllProducts from "./components/Products/AllProducts";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { UnProtectedRoute } from "./components/Route/UnProtectedRoute";
import EditProduct from "./components/Products/EditProduct";
import { ConstantRoutes } from "./components/Route/ConstantsRoutes";
import AddProduct from "./components/Products/AddProduct";

function App() {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Routes>
        <Route path={ConstantRoutes.NOTFOUND} element={<UnProtectedRoute Component={Login} />} />
      </Routes>
    );
  }

  return (
    <div className="relative">
      {token && (
        <AppHeader className="fixed top-0 left-0 right-0 z-50 w-full" />
      )}
      <div className="flex h-vh pt-[7%] container mx-auto">
        {/* ---------------------- Side_Bar ----------------------*/}
        <Sidebar className="fixed h-[100vh] top-[15%] left-0 z-40" />
        {/* ---------------------- Content ----------------------*/}

        <div className="w-full ml-60">
          <Routes>
            {/* ----------------------- UnProtected_Route -----------------------  */}
            <Route
              path={ConstantRoutes.LOGIN}
              element={<UnProtectedRoute Component={Login} />}
            />
            {/* ------------------------ Protected_Route ------------------------  */}
            <Route
              path={ConstantRoutes.DASHBOARD}
              element={<ProtectedRoute Component={Dashboard} />}
            />
            <Route
              path={ConstantRoutes.ALL_ORDERS}
              element={<ProtectedRoute Component={AllOrders} />}
            />
            <Route
              path={ConstantRoutes.ALL_PRODUCTS}
              element={<ProtectedRoute Component={AllProducts} />}
            />
            <Route
              path={ConstantRoutes.ADD_PRODUCT}
              element={<ProtectedRoute Component={AddProduct}/>}
            />
            <Route
              path={ConstantRoutes.EDIT_PRODUCT}
              element={<ProtectedRoute Component={EditProduct} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
