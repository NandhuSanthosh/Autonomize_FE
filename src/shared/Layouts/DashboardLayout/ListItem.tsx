import React, { type ReactNode } from "react";

import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";

type Props = {
	href: string;
	index: number;
	icon: (active: boolean) => ReactNode;
	label: string;
};

const ListItem = ({ href, icon, label }: Props) => {
	const location = useLocation();
	const active = location.pathname === href;

	return (
		<Link to={href} style={{ textDecoration: "none" }}>
			<div
				className={`${styles.itemContainer} ${active && styles.active}`}
			>
				<div style={{ display: "flex", gap: "10px" }}>
					<div>{icon(active)} </div>
					<div className={`${styles.label}`}>{label}</div>
				</div>
			</div>
		</Link>
	);
};

export default ListItem;
