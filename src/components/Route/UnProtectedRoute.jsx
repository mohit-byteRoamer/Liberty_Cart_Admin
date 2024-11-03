/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const UnProtectedRoute = ({ Component }) => {
  const isAuthenticated = localStorage.getItem("token");
  return !isAuthenticated ? <Component /> : <Navigate to="/" />;
};
