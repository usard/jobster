import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { userData } = useSelector((state) => state.user);
  if (!userData) {
    return <Navigate to="/register" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
