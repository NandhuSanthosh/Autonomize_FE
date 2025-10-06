import React from "react";

import Overview from "../components/Overview";
import UserPerformance from "../components/UserPerformance";
import TaskTrends from "../components/TaskTrends";

export default function AnalyticsDashboard() {
	return (
		<div
			style={{
				gap: "16px",
				padding: "24px",
				height: "91vh",
				boxSizing: "border-box",
				backgroundColor: "#f9fafb",
				overflow: "auto",
			}}
		>
			{/* Overview: Status & Priority */}
			<div style={{ gridColumn: "span 2" }}>
				<Overview />
			</div>

			{/* User Performance Table */}
			<div
				style={{
					gridColumn: "span 1",
					backgroundColor: "white",
					padding: "16px",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
				}}
			>
				<UserPerformance />
			</div>

			{/* Task Trends Chart */}
			<div
				style={{
					gridColumn: "span 1",
					backgroundColor: "white",
					padding: "16px",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
					marginTop: "20px",
				}}
			>
				<TaskTrends />
			</div>
		</div>
	);
}
