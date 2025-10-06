import React from "react";

import styles from "../accets/styles.module.css";

type Props = {
	active: string;
	handleActiveUpdate: (v: string) => void;
};
const SideBar = ({ active, handleActiveUpdate }: Props) => {
	const optionStyle: React.CSSProperties = {
		padding: "10px 0",
		cursor: "pointer",
		fontSize: "15px",
		color: "#444",
		transition: "color 0.2s ease",
	};

	const activeStyle: React.CSSProperties = {
		color: "#2563eb", // blue highlight
		fontWeight: 600,
	};

	return (
		<div className={`${styles.sidebar}`}>
			{["profile", "task management", "security"].map((item) => (
				<div
					key={item}
					style={{
						...optionStyle,
						...(active === item ? activeStyle : {}),
					}}
					onClick={() => handleActiveUpdate(item)}
				>
					{item.charAt(0).toUpperCase() + item.slice(1)}
				</div>
			))}
		</div>
	);
};

export default SideBar;
