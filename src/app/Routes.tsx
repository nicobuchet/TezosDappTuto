import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<HomePage />} />
    </AppRoutes>
  );
};

export default Routes;
