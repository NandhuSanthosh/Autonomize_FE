import React from "react";

import styles from "../accets/styles.module.css";

type Props = {
	children: string;
};

const Heading: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<span className={styles.heading}>{children}</span>
		</div>
	);
};

export default Heading;
