import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { SearchAppBar } from "../components/AppBar/SearchAppBar";
import ProtectedRoute from "../auth/ProtectedRoute";
import { Profile } from "../components/Profile/Profile";


export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SearchAppBar />} />
          <Route path="/profile" element={<ProtectedRoute></ProtectedRoute>}>

          <Route path="/profile" element={<Profile />}></Route>
          </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};
