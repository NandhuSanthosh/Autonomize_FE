import { Route } from "react-router-dom";

import Dashboard from "../../features/home/pages/Dashboard";
import paths from "../paths";
import Tasks from "../../features/tasks/pages/Tasks";
import Settings from "../../features/settings/pages/Settings";
import TaskDetails from "../../features/tasks/pages/TaskDetails";

const DashboardRoutes = (
	<>
		<Route path="" element={<Dashboard />} />;
		<Route path={`${paths.tasks.index}`} element={<Tasks />} />
		<Route
			path={`${paths.tasks.index}/${paths.tasks.details}/:taskId`}
			element={<TaskDetails />}
		/>
		<Route path={`${paths.settings.index}`} element={<Settings />} />
	</>
);
export default DashboardRoutes;
