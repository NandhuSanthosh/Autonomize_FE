import axios from "../../../configs/axios";

export const fetchCommentsApi = async (taskId: string) => {
	try {
		const res = await axios.get(`/comment/${taskId}`);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};

type PostCommentType = {
	taskId: string;
	text: string;
};
export const postCommentsApi = async (payload: PostCommentType) => {
	try {
		const res = await axios.post(`/comment`, payload);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};

export const deleteCommentsApi = async (commentId: string) => {
	try {
		const res = await axios.delete(`/comment/${commentId}`);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ createApi ~ error:", error);
		return false;
	}
};
