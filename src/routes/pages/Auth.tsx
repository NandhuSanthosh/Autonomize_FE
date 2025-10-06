import React, { lazy } from "react";
import { Route } from "react-router-dom";

import paths from "../paths";
import AuthLayout from "../../features/auth/components/AuthLayout/AuthLayout";

const Login = lazy(() => import("../../features/auth/pages/Login"));
const Signin = lazy(() => import("../../features/auth/pages/Signin"));

const Auth = (
	<>
		<Route path={paths.auth.index} element={<AuthLayout />}>
			<Route path={paths.auth.login} element={<Login />} />
			<Route path={paths.auth.signin} element={<Signin />} />
		</Route>
	</>
);

export default Auth;
