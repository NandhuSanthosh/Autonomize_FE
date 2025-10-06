import type { Task } from "../types";
import { formatDateWithOutTime } from "../../../utils/format";

import styles from "../accets/styles.module.css";
import { getFormattedPriority } from "../../../utils/taskFormatters";
import paths from "../../../routes/paths";
import { Link } from "react-router-dom";
import TaskStateDropdown from "./TaskStateDropdown";

type Props = {
	task: Task;
	handleRefresh: () => void;
};

export default function ListItem({ task, handleRefresh }: Props) {
	const cardStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		gap: "20px",
		padding: "16px",
		borderRadius: "12px",
		background: "#fff",
		boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
		marginBottom: "16px",
		width: "100%",
	};

	const sectionStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		gap: "6px",
		minWidth: "120px",
	};

	const labelStyle: React.CSSProperties = {
		fontSize: "12px",
		color: "#777",
		fontWeight: 500,
	};

	return (
		<div style={cardStyle}>
			{/* Title + Description */}
			<Link
				to={`${paths.tasks.details}/${task._id}`}
				style={{ textDecoration: "none", color: "inherit", flex: 2 }}
			>
				<div style={{ ...sectionStyle }}>
					<span style={{ fontWeight: 600, fontSize: "16px" }}>
						{task.title}
					</span>
					<span
						style={{
							fontSize: "13px",
							color: "#555",
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							textOverflow: "ellipsis",
							lineHeight: "20px",
						}}
					>
						{task.description}
					</span>
					{/* Due Date */}
					<div
						style={{
							display: "flex",
							alignItems: "end",
							gap: "10px",
						}}
					>
						<span style={labelStyle}>Due Date</span>
						<span
							style={{
								...labelStyle,
								color: "black",
								marginTop: "5px",
							}}
						>
							{task.dueDate
								? formatDateWithOutTime(task.dueDate)
								: "N/A"}
						</span>
					</div>
				</div>
			</Link>

			{/* Status */}
			<div style={sectionStyle}>
				<span style={labelStyle}>Status</span>
				<TaskStateDropdown
					currentState={task.status}
					taskId={task._id}
					handleRefresh={handleRefresh}
				/>
			</div>

			{/* Priority */}
			<div style={sectionStyle} className={`${styles.priority}`}>
				<span style={labelStyle}>Priority</span>
				<span
					style={{
						padding: "8px 10px",
						borderRadius: "6px",
						background: getFormattedPriority(task.priority).color,
						fontSize: "13px",
						fontWeight: 600,
						textAlign: "center",
					}}
				>
					{getFormattedPriority(task.priority).label}
				</span>
			</div>

			{/* Assigned To */}
			<div style={sectionStyle} className={`${styles.assignedTo}`}>
				<span style={labelStyle}>Assigned To</span>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginTop: "5px",
					}}
				>
					<span>
						{task.assignedTo?.firstName &&
							task.assignedTo.firstName}{" "}
						{task.assignedTo?.firstName &&
							task.assignedTo?.secondName &&
							task.assignedTo.secondName}
					</span>
				</div>
			</div>
		</div>
	);
}
