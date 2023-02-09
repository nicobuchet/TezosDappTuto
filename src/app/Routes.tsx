import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import GamePage from "../pages/GamePage/GamePage";
import HomePage from "../pages/HomePage/HomePage";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game/:id" element={<GamePage />} />
    </AppRoutes>
  );
};

export default Routes;
