import { Link } from "react-router-dom";
import { formatDate, formatDateWithOutTime } from "../../../utils/format";
import type { Task } from "../types";
import paths from "../../../routes/paths";
import { getFormattedPriority } from "../../../utils/taskFormatters";

const labelStyle: React.CSSProperties = {
	fontSize: "12px",
	color: "#777",
	fontWeight: 500,
};

type Props = {
	task: Task;
};

const SectionItem = ({ task }: Props) => {
	return (
		<Link
			to={`${paths.tasks.details}/${task._id}`}
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<div
				style={{
					background: "#fff",
					borderRadius: "12px",
					padding: "16px",
					boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
				}}
				key={task._id}
			>
				{/* Header */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginBottom: "12px",
					}}
				>
					<div>
						<div
							style={{
								fontWeight: 600,
								fontSize: "18px",
								marginBottom: "4px",
							}}
						>
							{task.title}
						</div>
						<div style={{ fontSize: "12px", color: "#6b7280" }}>
							{formatDate(task.createdAt)}
						</div>
					</div>
				</div>

				{/* Body */}
				<p
					style={{
						fontSize: "14px",
						color: "#374151",
						marginBottom: "16px",
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						lineHeight: "20px",
					}}
				>
					{task.description}
				</p>

				{/* Due Date */}
				<div
					style={{
						display: "flex",
						alignItems: "end",
						gap: "10px",
						marginBottom: "10px",
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

				{/* Footer */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<button
						style={{
							display: "flex",
							alignItems: "center",
							gap: "6px",
							border: "1px solid #e5e7eb",
							borderRadius: "8px",
							padding: "6px 12px",
							fontSize: "14px",
							cursor: "pointer",
							background: getFormattedPriority(task.priority)
								.color,
						}}
					>
						{getFormattedPriority(task.priority).label}
					</button>
				</div>
			</div>
		</Link>
	);
};

export default SectionItem;
