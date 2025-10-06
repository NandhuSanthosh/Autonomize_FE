import { Route, Routes } from "react-router-dom";

import DashboardRoutes from "./pages/Dashboard";
import Auth from "./pages/Auth";
import { lazy } from "react";

const ProtectedRoutesLayout = lazy(
	() => import("../shared/Layouts/ProtectedRoutesLayout")
);
const HomeLayout = lazy(
	() => import("../shared/Layouts/DashboardLayout/HomeLayout")
);
const NonAuthRoutesLayout = lazy(
	() => import("../shared/Layouts/NonAuthRoutesLayout")
);
const NotFoundPage = lazy(() => import("../features/404Page/pages/NotFound"));

const RoutesWrapper = () => {
	return (
		<Routes>
			<Route path="" element={<ProtectedRoutesLayout />}>
				<Route path="" element={<HomeLayout />}>
					{DashboardRoutes}
				</Route>
			</Route>
			<Route path="" element={<NonAuthRoutesLayout />}>
				{Auth}
			</Route>

			{/* Fallback / 404 */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default RoutesWrapper;
