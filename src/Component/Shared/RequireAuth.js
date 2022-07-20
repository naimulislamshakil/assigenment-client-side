import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ user }) => {
  const location = useLocation();

  if (!user._id) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RequireAuth;
