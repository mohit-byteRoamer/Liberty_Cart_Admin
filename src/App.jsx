import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./page/Login";
import AppHeader from "./components/AppHeader/Header";
import { UnProtectedRoute } from "./components/Route/UnProtectedRoute";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem("token");



  return (
    <>
      {token && <AppHeader />}
      <div className="App container mx-auto">
        <Routes>
          <Route
            path="/admin_login"
            element={<UnProtectedRoute Component={Login} />}
          />
          <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
