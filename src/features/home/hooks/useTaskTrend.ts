import { useEffect, useState } from "react";
import { fetchTaskTrendAPI } from "../api";

type TaskTrend = {
	date: string;
	created: number;
};

export const useTaskTrend = () => {
	const [loading, setLoading] = useState(false);
	const [taskTrend, setTaskTrend] = useState<TaskTrend[]>([]);

	const fetchTaskTrend = async () => {
		setLoading(true);
		const res = await fetchTaskTrendAPI();
		setLoading(false);
		if (res) {
			const { result } = res;

			const array = result.created.map((curr: any) => {
				return {
					date: curr._id,
					created: curr.count,
				};
			});
			setTaskTrend(array);
		}
	};

	useEffect(() => {
		fetchTaskTrend();
	}, []);

	return { taskTrend, loading };
};
