import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
};
