import React from "react";
import { useOverview } from "../hooks/useOverview";

export default function Overview() {
	const { overview } = useOverview();

	const totalTasks = overview?.total || "NA";

	const cardContainer: React.CSSProperties = {
		display: "flex",
		flexWrap: "wrap",
	};

	const cardStyle: React.CSSProperties = {
		flex: "1 1 200px",
		backgroundColor: "white",
		padding: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		transition: "transform 0.2s",
	};

	const cardHeader: React.CSSProperties = {
		fontSize: "14px",
		color: "#6b7280",
		marginBottom: "12px",
		textTransform: "uppercase",
		fontWeight: 500,
	};

	const cardNumber: React.CSSProperties = {
		fontSize: "32px",
		fontWeight: 700,
		color: "#111827",
	};

	return (
		<div>
			<h2
				style={{
					fontSize: "22px", // Medium size
					fontWeight: 600, // Slightly bold but not heavy
					color: "#374151", // Soft dark gray
					marginBottom: "16px", // Space below the heading
					letterSpacing: "0.3px", // Slight spacing for readability
				}}
			>
				Analytics Overview
			</h2>

			{/* Total Tasks */}
			<div
				style={{
					...cardStyle,
					marginBottom: "20px",
					flex: "1 1 100%",
					alignItems: "center",
				}}
			>
				<div style={cardHeader}>Total Tasks</div>
				<div style={cardNumber}>{totalTasks}</div>
			</div>

			{/* Status Cards */}
			<div style={cardContainer}>
				{overview?.statusCounts?.map((s) => (
					<div
						key={s.status}
						style={{ ...cardStyle, cursor: "default" }}
						className="hover-scale"
					>
						<div style={cardHeader}>Status: {s.status}</div>
						<div style={cardNumber}>{s.count}</div>
					</div>
				))}
			</div>

			{/* Priority Cards */}
			<div style={{ ...cardContainer, marginBlock: "24px" }}>
				{overview?.priorityCounts?.map((p) => (
					<div
						key={p.priority}
						style={{ ...cardStyle, cursor: "default" }}
						className="hover-scale"
					>
						<div style={cardHeader}>Priority: {p.priority}</div>
						<div style={cardNumber}>{p.count}</div>
					</div>
				))}
			</div>
		</div>
	);
}
