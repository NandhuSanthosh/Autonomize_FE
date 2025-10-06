import axios from "../../../configs/axios";

export const fetchOverviewApi = async () => {
	try {
		const res = await axios.get("/analytics/overview");
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ fetchTaskApi ~ error:", error);
		return false;
	}
};

export const fetchUserPerformanceAPI = async () => {
	try {
		const res = await axios.get("/analytics/user-performance");
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ fetchTaskApi ~ error:", error);
		return false;
	}
};

export const fetchTaskTrendAPI = async () => {
	try {
		const res = await axios.get("/analytics/task-trend");
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ fetchTaskApi ~ error:", error);
		return false;
	}
};
