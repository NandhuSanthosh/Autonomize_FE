import { useCallback, useEffect, useState } from "react";

import { fetchIndividualTaskAPI } from "../api";
import type { Task } from "../types";

export const useFetchIndividualTask = (taskId: string | undefined) => {
	const [loading, setLoading] = useState(false);
	const [task, setTask] = useState<Task>();
	const [refresh, setRefresh] = useState(true);

	const fetchIndividualTask = useCallback(async () => {
		if (!taskId) return;
		setLoading(true);
		const response = await fetchIndividualTaskAPI(taskId);
		if (response) {
			setTask(response.task);
		}
		setLoading(false);
	}, [taskId]);

	const handleRefresh = () => {
		setRefresh(true);
	};

	useEffect(() => {
		if (refresh) {
			fetchIndividualTask();
			setRefresh(false);
		}
	}, [fetchIndividualTask, refresh]);

	return { loading, task, handleRefresh };
};
