import React, { type ReactNode } from "react";

type Props = {
	title: string;
	children: ReactNode;
};
const DetailsItem = ({ title, children }: Props) => {
	return (
		<div
			style={{
				minWidth: "200px",
			}}
		>
			<h2
				style={{
					fontSize: "16px",
					fontWeight: 600,
					marginBottom: "11px",
				}}
			>
				{title}
			</h2>
			{children}
		</div>
	);
};

export default DetailsItem;
