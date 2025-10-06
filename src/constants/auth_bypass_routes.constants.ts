import paths from "../routes/paths";

const authBypassRoutes = [
	// "/",
	`${paths.auth.index}/${paths.auth.login}`,
	`${paths.auth.index}/${paths.auth.signin}`,
];

export default authBypassRoutes;
