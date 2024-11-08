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

function App() {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Routes>
        <Route path="*" element={<UnProtectedRoute Component={Login} />} />
      </Routes>
    );
  }

  return (
    <>
      {token && <AppHeader />}
      <div className="container mx-auto">
        <div className="flex-grow">
          <div className="flex h-screen">
            {/* ---------------------- Side_Bar ----------------------*/}
            <Sidebar />
            {/* ---------------------- Content ----------------------*/}

            <div className="w-[100vw]">
              <Routes>
                {/* ----------------------- UnProtected_Route -----------------------  */}
                <Route
                  path="/admin_login"
                  element={<UnProtectedRoute Component={Login} />}
                />
                {/* ------------------------ Protected_Route ------------------------  */}
                <Route
                  path="/"
                  element={<ProtectedRoute Component={Dashboard} />}
                />
                <Route
                  path="/orders"
                  element={<ProtectedRoute Component={AllOrders} />}
                />
                <Route
                  path="/products"
                  element={<ProtectedRoute Component={AllProducts} />}
                />
                <Route
                  path="/editProduct:id"
                  element={<ProtectedRoute Component={EditProduct} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
