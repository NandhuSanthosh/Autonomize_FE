import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";
import { useTaskTrend } from "../hooks/useTaskTrend";

export default function TaskTrends() {
	const { taskTrend } = useTaskTrend();
	return (
		<div
			style={{
				backgroundColor: "white",
				padding: "24px",
				borderRadius: "12px",
				boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
				height: "100%",
			}}
		>
			<h3 style={{ marginBottom: "16px", color: "#374151" }}>
				Task Trends
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={taskTrend}
					margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Legend verticalAlign="top" height={36} />
					<Line
						type="monotone"
						dataKey="created"
						stroke="#3b82f6"
						strokeWidth={2}
					/>
					{/* <Line
						type="monotone"
						dataKey="completed"
						stroke="#10b981"
						strokeWidth={2}
					/> */}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
