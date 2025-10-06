import React from "react";
import Modal from "../../../shared/components/Modal";
import TaskForm from "./TaskForm";
import type { Task } from "../types";

type Props = {
	open: boolean;
	setOpen: (v: boolean) => void;
	data?: Task;
	handleRefresh?: () => void;
};
const CreateTaskModal = ({ open, setOpen, data, handleRefresh }: Props) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				title={data ? "Edit Task" : "Create Task"}
			>
				<TaskForm
					handleCancel={() => setOpen(false)}
					data={data}
					handleRefresh={handleRefresh}
				/>
			</Modal>
		</div>
	);
};

export default CreateTaskModal;
