import { useState } from "react";
import { useCreateTask } from "../hooks/useCreateTask";

const TaskStateDropdown = ({
	currentState,
	taskId,
	handleRefresh,
}: {
	currentState: string;
	taskId: string;
	handleRefresh?: () => void;
}) => {
	console.log("🚀 ~ TaskStateDropdown ~ taskId:", taskId);
	const [value, setValue] = useState(currentState);

	const { updateTask } = useCreateTask({ handleRefresh });

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value);
		updateTask({ status: e.target.value }, taskId);
		// onChange(e.target.value);
	};

	return (
		<select
			value={value}
			onChange={handleChange}
			style={{
				backgroundColor: "#ffffff",
				border: "1px solid #d1d5db",
				borderRadius: "6px",
				padding: "8px 12px",
				fontSize: "14px",
				color: "#374151",
				cursor: "pointer",
				outline: "none",
			}}
		>
			<option value="todo">To Do</option>
			<option value="inprogress">In Progress</option>
			<option value="inreview">In Review</option>
			<option value="done">Done</option>
		</select>
	);
};

export default TaskStateDropdown;
