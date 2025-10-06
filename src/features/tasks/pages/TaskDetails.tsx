import { useParams, useNavigate } from "react-router-dom";

import { useFetchIndividualTask } from "../hooks/useFetchIndividualTask";
import { getFormattedPriority } from "../../../utils/taskFormatters";
import { formatDateWithOutTime } from "../../../utils/format";
import DetailsItem from "../components/DetailsItem";
import Loading from "../../../shared/components/Loading";
import ActionButtons from "../components/ActionButtons";
import TaskStateDropdown from "../components/TaskStateDropdown";
import CommentSection from "../components/CommentSection";
import Modal from "../../../shared/components/Modal";
import { useState } from "react";
import FindUser from "../components/FindUser";

const TaskDetailsPage = () => {
	const { taskId } = useParams<{ taskId: string }>();
	const navigate = useNavigate();

	const { task, loading, handleRefresh } = useFetchIndividualTask(taskId);

	const [open, setOpen] = useState(false); // assign modal

	if (loading) return <Loading />;
	if (!task) return <p>Task not found</p>;

	// Function to get priority color
	const getPriorityColor = (priority: string) => {
		switch (priority) {
			case "High":
				return "#ff2c29";
			case "Medium":
				return "#f59e0b";
			case "Low":
				return "#10b981";
			default:
				return "#6b7280";
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "0 auto",
				width: "100%",
				padding: "40px 20px",
				boxSizing: "border-box",
				backgroundColor: "#f9fafb",
				overflow: "auto",
			}}
		>
			{/* Header */}
			<div style={{ marginBottom: "30px" }}>
				<button
					onClick={() => navigate(-1)}
					style={{
						marginBottom: "10px",
						background: "none",
						border: "none",
						cursor: "pointer",
						color: "#3b82f6",
						fontSize: "14px",
					}}
				>
					← Back
				</button>
				<h1 style={{ fontSize: "32px", fontWeight: 700 }}>
					{task.title}
				</h1>
			</div>

			{/* Task Info */}
			<div
				style={{
					flex: 1,
					background: "#fff",
					borderRadius: "12px",
					padding: "30px",
					boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
					display: "flex",
					flexDirection: "column",
					gap: "30px",
				}}
			>
				<div
					style={{
						display: "flex",
						gap: "16px",
						justifyContent: "space-between",
					}}
				>
					<TaskStateDropdown
						currentState={task.status}
						taskId={task._id}
					/>
					<ActionButtons task={task} handleRefresh={handleRefresh} />
				</div>

				{/* Description */}
				<div>
					<h2
						style={{
							fontSize: "18px",
							fontWeight: 600,
							marginBottom: "8px",
						}}
					>
						Description
					</h2>
					<p
						style={{
							fontSize: "14px",
							color: "#374151",
							lineHeight: 1.6,
							display: "-webkit-box",
							WebkitLineClamp: 10,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{task.description}
					</p>
				</div>

				{/* Priority & Due Date */}
				<div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
					<DetailsItem title="Priority">
						<span
							style={{
								color: "#fff",
								backgroundColor: getPriorityColor(
									task.priority
								),
								padding: "4px 10px",
								borderRadius: "6px",
								fontWeight: 500,
							}}
						>
							{getFormattedPriority(task.priority).label}
						</span>
					</DetailsItem>

					<DetailsItem title="Due Date">
						<span style={{ fontSize: "14px", color: "#374151" }}>
							{task.dueDate
								? formatDateWithOutTime(task.dueDate)
								: "NA"}
						</span>
					</DetailsItem>
				</div>

				{/* Author & Assigned */}
				<div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
					<DetailsItem title="Author">
						<span style={{ fontSize: "14px", color: "#374151" }}>
							{task.author.firstName} {task.author.secondName}
						</span>
					</DetailsItem>

					<DetailsItem title="Assigned To">
						<div>
							<span
								style={{ fontSize: "14px", color: "#374151" }}
							>
								{!task.assignedTo?.firstName &&
									!task.assignedTo?.secondName &&
									"NA"}
								{task.assignedTo?.firstName}{" "}
								{task.assignedTo?.firstName &&
									task.assignedTo?.secondName}
							</span>
							<button
								onClick={() => setOpen(true)}
								style={{
									background: "none",
									border: "none",
									color: "#3b82f6",
									fontSize: "14px",
									fontWeight: 500,
									cursor: "pointer",
								}}
							>
								{!task.assignedTo ? "Add" : "Edit"}
							</button>
						</div>
					</DetailsItem>
				</div>

				{/* Tags */}
				<div>
					<DetailsItem title="Tags">
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "8px",
							}}
						>
							{task.tags.map((tag) => (
								<span
									key={tag}
									style={{
										backgroundColor: "#e5e7eb",
										color: "#374151",
										padding: "4px 10px",
										borderRadius: "6px",
										fontSize: "12px",
									}}
								>
									{tag}
								</span>
							))}
						</div>
					</DetailsItem>
				</div>
			</div>

			{/* Bottom space for future feature */}
			<div
				style={{
					marginTop: "30px",
					backgroundColor: "#f3f4f6",
					borderRadius: "12px",
				}}
			>
				<CommentSection taskId={task._id} />
			</div>

			<Modal
				title="Assign Task"
				open={open}
				onClose={() => setOpen(false)}
			>
				<FindUser
					taskId={task._id}
					handleRefresh={handleRefresh}
					handleCancel={() => setOpen(false)}
				/>
			</Modal>
		</div>
	);
};

export default TaskDetailsPage;
