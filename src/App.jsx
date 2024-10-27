import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./page/Login";

function App() {
  return (
    <div className="App container mx-auto">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin_login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
