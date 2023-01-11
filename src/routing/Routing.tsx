import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { SearchAppBar } from "../components/AppBar/SearchAppBar";
import ProtectedRoute from "../auth/ProtectedRoute";
import { Profile } from "../components/Profile/Profile";
import ProductsWrapper from "../components/ProductsWrapper";
import { ProductStateContext,useStateContext } from "../Context/ProductContext";

export const Routing = () => {
  const [searchWord, ]= useStateContext();
  return (
    <BrowserRouter>
         <SearchAppBar />
      <Routes>
      <Route path="/" element={<ProductsWrapper  /> } />
        <Route path="/profile" element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="*" element={<h5>There's nothing here: 404!</h5>} />
      </Routes>
    </BrowserRouter>
  );
};
