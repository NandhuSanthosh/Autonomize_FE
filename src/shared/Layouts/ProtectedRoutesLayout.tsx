import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import authBypassRoutes from "../../constants/auth_bypass_routes.constants";
import type { RootState } from "../../store/store";

const ProtectedRoutesLayout = () => {
	const location = useLocation();
	const currPath = location.pathname;
	const { accessToken } = useSelector((state: RootState) => state.user);

	if (!accessToken && !authBypassRoutes.includes(currPath)) {
		return <Navigate to="/auth/login" replace />;
	}
	return <Outlet />;
};

export default ProtectedRoutesLayout;
