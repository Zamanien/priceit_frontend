import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./useUser";

const useAuth = (data:any) => {
  if (!data) {
    return false;
  } else if (data.user.role === "user") {
    return true;
  }
};

const ProtectedRoute = (props: any) => {
 
  const data = useUser()
  const auth = useAuth(data);
  return auth ? <Outlet context={data.user}/> : <Navigate to="/" />;
};

export default ProtectedRoute;
