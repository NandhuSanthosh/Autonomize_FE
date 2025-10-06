import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Profile from "../components/Profile";

import styles from "../accets/styles.module.css";

const Settings = () => {
	const [active, setActive] = useState("profile");

	const contentStyle: React.CSSProperties = {
		flex: 1,
		padding: "30px",
	};

	const handleActiveUpdate = (v: string) => setActive(v);
	return (
		<div className={`${styles.container}`}>
			{/* Sidebar */}
			<SideBar active={active} handleActiveUpdate={handleActiveUpdate} />

			{/* Content */}
			<div className="contentPadding" style={contentStyle}>
				{active === "profile" && <Profile />}
			</div>
		</div>
	);
};

export default Settings;
