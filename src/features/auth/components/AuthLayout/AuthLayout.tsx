import React from "react";
import { Outlet } from "react-router-dom";

import SidePanel from "./SidePanel";
import logo from "../../../../assets/logo.png";

import styles from "./styles.module.css";

const AuthLayout = () => {
	return (
		<div className={styles.authPageLayout}>
			<SidePanel />
			<div className={styles.contentWrapper}>
				<Outlet />
			</div>
			<img className={styles.logo} src={logo} />
		</div>
	);
};

export default AuthLayout;
