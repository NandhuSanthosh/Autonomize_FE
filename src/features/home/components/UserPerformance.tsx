import React from "react";
import { useUserPerformance } from "../hooks/useUserPerformance";

export default function UserPerformance() {
	const { userPerformance } = useUserPerformance();
	return (
		<div
			style={{
				backgroundColor: "white",
				padding: "20px",
				borderRadius: "12px",
				height: "100%",
				overflowX: "auto",
			}}
		>
			<h3 style={{ marginBottom: "16px", color: "#111827" }}>
				Performance
			</h3>
			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					minWidth: "400px",
				}}
			>
				<thead>
					<tr
						style={{
							textAlign: "left",
							borderBottom: "2px solid #e5e7eb",
						}}
					>
						<th style={{ padding: "8px" }}>User</th>
						<th style={{ padding: "8px" }}>Tasks Assigned</th>
						<th style={{ padding: "8px" }}>Tasks Completed</th>
					</tr>
				</thead>
				<tbody>
					{userPerformance?.map((user) => (
						<tr
							key={user.firstName}
							style={{
								borderBottom: "1px solid #e5e7eb",
								transition: "background 0.2s",
							}}
						>
							<td style={{ padding: "8px" }}>
								{user.firstName} {user.secondName}
							</td>
							<td style={{ padding: "8px" }}>
								{user.tasksAssigned}
							</td>
							<td style={{ padding: "8px" }}>
								{user.tasksCompleted}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
