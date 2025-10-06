import { useEffect, useState } from "react";
import { fetchUserPerformanceAPI } from "../api";

type UserPerformance = {
	firstName: string;
	secondName?: string;
	tasksAssigned: number;
	tasksCompleted: number;
};
export const useUserPerformance = () => {
	const [loading, setLoading] = useState(false);
	const [userPerformance, setUserPerformance] = useState<
		UserPerformance[] | null
	>(null);

	const fetchUserPerformance = async () => {
		setLoading(true);
		const res = await fetchUserPerformanceAPI();
		setLoading(false);
		if (res) {
			setUserPerformance(res.result);
		}
	};

	useEffect(() => {
		fetchUserPerformance();
	}, []);

	return { userPerformance, loading };
};
