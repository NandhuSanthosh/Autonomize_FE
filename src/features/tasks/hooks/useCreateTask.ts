import { useState } from "react";

import { createApi, updateApi } from "../api";
import type { CreateTaskPayload } from "../types";
import { useDispatch } from "react-redux";
import { showToast } from "../../../store/toastSlice";

type Props = {
	handleRefresh?: () => void;
};
export const useCreateTask = ({ handleRefresh }: Props) => {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const createTask = async (payload: CreateTaskPayload) => {
		setLoading(true);
		const response = await createApi(payload);
		setLoading(false);
		if (response) {
			dispatch(
				showToast({
					message: "Task created successfuly!",
					type: "success",
				})
			);
			return true;
		}
		return false;
	};

	const updateTask = async (payload: CreateTaskPayload, taskId: string) => {
		setLoading(true);
		const response = await updateApi(payload, taskId);
		setLoading(false);
		if (response) {
			dispatch(
				showToast({
					message: "Task updated successfuly!",
					type: "success",
				})
			);
			if (handleRefresh) {
				handleRefresh();
			}
			return true;
		}
		return false;
	};

	return { createTask, updateTask, loading };
};
