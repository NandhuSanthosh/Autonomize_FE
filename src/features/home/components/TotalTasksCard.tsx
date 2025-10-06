import React from "react";

export default function TotalTasksCard({ total }: { total: number }) {
	return (
		<div
			style={{
				backgroundColor: "white",
				padding: "24px",
				borderRadius: "12px",
				boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h3 style={{ color: "#6b7280", marginBottom: "12px" }}>
				Total Tasks
			</h3>
			<p style={{ fontSize: "36px", fontWeight: 700, color: "#111827" }}>
				{total}
			</p>
		</div>
	);
}
