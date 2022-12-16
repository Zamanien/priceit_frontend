import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { SignUpUser } from "../components/Users/SignUp/SignUpUser";
import ProductsWrapper from "../components/Products/ProductsWrapper";
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsWrapper />} />
        <Route path="/users/signup" element={<SignUpUser />} />
      </Routes>
    </BrowserRouter>
  );
};
