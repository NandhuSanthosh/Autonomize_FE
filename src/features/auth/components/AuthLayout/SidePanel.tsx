import React from "react";

import styles from "./styles.module.css";

const SidePanel = () => {
	return (
		<div className={styles.sidePanel}>
			<img
				className=""
				style={{
					width: "100%",
					height: "100%",
					borderRadius: "20px",
				}}
				src={`
                https://images.pexels.com/photos/3584309/pexels-photo-3584309.jpeg          
            `}
			/>
		</div>
	);
};

export default SidePanel;
