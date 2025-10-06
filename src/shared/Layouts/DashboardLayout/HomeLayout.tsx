import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

import styles from "./styles.module.css";

const HomeLayout = () => {
	const [hideSideBar, setHideSideBar] = useState(true);
	const toggleSideBar = () => setHideSideBar(!hideSideBar);
	return (
		<div className={`${styles.container}`}>
			<Sidebar hideSideBar={hideSideBar} toggleSideBar={toggleSideBar} />
			<div
				className={`flex flex-column ${styles.content}`}
				style={{ height: "100vh" }}
			>
				<Navigation toggleSideBar={toggleSideBar} />
				<Outlet />
			</div>
		</div>
	);
};

export default HomeLayout;
