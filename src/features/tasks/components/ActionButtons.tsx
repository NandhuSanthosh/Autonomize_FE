import React, { useState } from "react";
import type { Task } from "../types";
import CreateTaskModal from "./CreateTaskModal";
import Modal from "../../../shared/components/Modal";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { useNavigate } from "react-router-dom";

type Props = {
	task: Task;
	handleRefresh: () => void;
};

const ActionButtons = ({ task, handleRefresh }: Props) => {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);

	const { loading, deleteTask } = useDeleteTask();
	return (
		<div>
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
				Edit
			</button>
			<button
				onClick={() => {
					setDeleteOpen(true);
				}}
				style={{
					background: "none",
					border: "none",
					color: "#ef4444",
					fontSize: "14px",
					fontWeight: 500,
					cursor: "pointer",
				}}
			>
				Delete
			</button>

			<CreateTaskModal
				open={open}
				setOpen={setOpen}
				data={task}
				handleRefresh={handleRefresh}
			/>

			<Modal
				open={deleteOpen}
				onClose={() => setDeleteOpen(false)}
				title="Delete Task"
			>
				Are you sure you want to delete the task. This operation is non
				reversable.
				<div
					className="flex flex-column"
					style={{
						gap: "10px",
						marginTop: "40px",
					}}
				>
					<GeneralButton
						label="Delete"
						loading={loading}
						onClick={async () => {
							const res = await deleteTask(task._id);
							if (res) {
								setDeleteOpen(false);
								navigate(-1);
							}
						}}
					/>
					<GeneralButton
						label="Back"
						type="default"
						onClick={() => setDeleteOpen(false)}
					/>
				</div>
			</Modal>
		</div>
	);
};

export default ActionButtons;
