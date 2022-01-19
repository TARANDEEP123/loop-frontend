import React from "react";
import {  Route } from "react-router-dom";
import {Navigate, Outlet} from 'react-router';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = sessionStorage.getItem("token");
  console.log("this", isAuthenticated);
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />
}
export default ProtectedRoute;