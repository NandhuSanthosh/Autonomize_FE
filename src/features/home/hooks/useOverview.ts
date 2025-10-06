import { useEffect, useState } from "react";
import { fetchOverviewApi } from "../api";

type Overview = {
	total: number;
	statusCounts: {
		count: number;
		status: string;
	}[];
	priorityCounts: {
		priority: string;
		count: number;
	}[];
};

export const useOverview = () => {
	const [loading, setLoading] = useState(false);
	const [overview, setOverview] = useState<Overview | null>(null);

	const fetchOverview = async () => {
		setLoading(true);
		const res = await fetchOverviewApi();
		setLoading(false);
		if (res) {
			const result = res.result;
			const total = result?.total[0].count;
			const { byStatus, byPriority } = result;

			const statuses = ["todo", "inprogress", "inreview", "done"];
			const statusCounts: { count: number; status: string }[] = [];
			statuses.forEach((status) => {
				let value = 0;
				for (let i = 0; i < byStatus.length; i++) {
					const curr = byStatus[i];
					if (curr.status === status) {
						value = curr.count;
					}
				}
				statusCounts.push({ count: value, status });
			});

			const priorities = ["high", "medium", "low"];
			const priorityCounts: { count: number; priority: string }[] = [];
			priorities.forEach((priority) => {
				let value = 0;
				for (let i = 0; i < byPriority.length; i++) {
					const curr = byPriority[i];
					if (curr.priority === priority) {
						value = curr.count;
					}
				}
				priorityCounts.push({ count: value, priority });
			});

			setOverview({
				total: total,
				statusCounts,
				priorityCounts,
			});
		}
	};

	useEffect(() => {
		fetchOverview();
	}, []);

	return { overview, loading };
};
