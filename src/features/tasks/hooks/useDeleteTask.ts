import { useState } from "react";
import { deleteTaskApi } from "../api";

export const useDeleteTask = () => {
	const [loading, setLoading] = useState(false);

	const deleteTask = async (taskId: string) => {
		setLoading(true);
		const res = await deleteTaskApi(taskId);
		setLoading(false);
		if (res) {
			return true;
		}
		return false;
	};

	return { deleteTask, loading };
};
