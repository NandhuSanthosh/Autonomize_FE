import type { CreateTaskPayload, Task } from "../types";
import axios from "../../../configs/axios";

export const createApi = async (payload: CreateTaskPayload) => {
	try {
		const res = await axios.post("/task", payload);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};

export const updateApi = async (payload: CreateTaskPayload, taskId: string) => {
	try {
		const res = await axios.put(`/task/${taskId}`, payload);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};

export const deleteTaskApi = async (taskId: string) => {
	try {
		const res = await axios.delete(`/task/${taskId}`);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};

type FetchTaskApiResponse = {
	data: {
		data: {
			tasks: Task[];
			count: number;
		};
	};
};

type SearchQuery = {
	searchText: string;
	low: boolean;
	high: boolean;
	medium: boolean;
	page: number;
	itemsPerPage: number;
};
export const fetchTaskApi = async (queryParams: SearchQuery) => {
	try {
		const res: FetchTaskApiResponse = await axios.get("/task", {
			params: queryParams,
		});
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ fetchTaskApi ~ error:", error);
		return false;
	}
};

type FetchSingleTaskApiResponse = {
	data: {
		data: {
			task: Task;
		};
	};
};
export const fetchIndividualTaskAPI = async (taskId: string) => {
	try {
		const res: FetchSingleTaskApiResponse = await axios.get(
			`/task/${taskId}`
		);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ fetchTaskApi ~ error:", error);
		return false;
	}
};

export const finduserApi = async (email: string) => {
	try {
		const res = await axios.get(`/user`, {
			params: {
				email,
			},
		});
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ finduserApi ~ error:", error);
		return false;
	}
};
