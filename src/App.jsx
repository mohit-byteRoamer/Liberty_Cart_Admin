import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./page/Login";
import AppHeader from "./components/AppHeader/Header";
import { UnProtectedRoute } from "./components/Route/UnProtectedRoute";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import AllOrders from "./components/Orders/AllOrders";
import Sidebar from "./components/Sidebar";

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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
