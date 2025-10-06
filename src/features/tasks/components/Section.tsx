import React from "react";
import SectionItem from "./SectionItem";
import type { Task } from "../types";

type Props = {
	label: string;
	tasks: Task[];
};

const Section = ({ label, tasks }: Props) => {
	const getFormattedLabel = (text: string) => {
		switch (text) {
			case "todo":
				return "Todo";
			case "inprogress":
				return "In Progress";
			case "inreview":
				return "In Review";
			case "done":
				return "Done";
		}
	};
	return (
		<div
			style={{
				borderRadius: "12px",
				padding: "16px",
				fontFamily: "sans-serif",
				minWidth: "300px",
			}}
		>
			{/* Column Header */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: "16px",
				}}
			>
				<div style={{ fontWeight: 600, fontSize: "16px" }}>
					{getFormattedLabel(label)}{" "}
					<span style={{ color: "#6b7280" }}>({tasks.length})</span>
				</div>
				{/* <button
					style={{
						border: "none",
						background: "transparent",
						fontSize: "20px",
						cursor: "pointer",
						color: "#6b7280",
					}}
				>
					+
				</button> */}
			</div>

			<div className="flex flex-column" style={{ gap: "10px" }}>
				{tasks.map((curr, index) => (
					<SectionItem task={curr} key={index} />
				))}
			</div>
		</div>
	);
};

export default Section;
