import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const NonAuthRoutesLayout = () => {
	const { accessToken } = useSelector((state: RootState) => state.user);

	if (accessToken) {
		return <Navigate to="/" replace />;
	}
	return <Outlet />;
};

export default NonAuthRoutesLayout;
