import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store/store";

const ProtectedRoute = () => {
  const {isAuthenticated} = useAppSelector(state=>state.auth);
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoute;
