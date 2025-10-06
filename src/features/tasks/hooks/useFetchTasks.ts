import { useCallback, useEffect, useState } from "react";
import { fetchTaskApi } from "../api";
import type { SearchQuery, Task } from "../types";

export const useFetchTasks = (query: SearchQuery, currentPage?: number) => {
	console.log("🚀 ~ useFetchTasks ~ query:", query);
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [count, setCount] = useState<number>(0);
	const [refresh, setRefresh] = useState(false);

	const fetchTasks = useCallback(async () => {
		setLoading(true);

		const queryParams: any = {
			searchText: query.searchText,
			low: query.priorities.low,
			high: query.priorities.high,
			medium: query.priorities.medium,
		};

		if (currentPage) {
			queryParams.page = currentPage;
			queryParams.itemsPerPage = 5;
		}
		const response = await fetchTaskApi(queryParams);
		if (response) {
			setTasks(response.tasks);
			setCount(response.count);
		}
		setLoading(false);
	}, [query, currentPage]);

	const handleRefresh = () => setRefresh(true);

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	useEffect(() => {
		if (refresh) {
			fetchTasks();
			setRefresh(false);
		}
	}, [refresh, fetchTasks]);

	return { loading, tasks, count, handleRefresh };
};
