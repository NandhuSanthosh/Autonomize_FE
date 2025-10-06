import { useEffect, useState } from "react";
import {
	deleteCommentsApi,
	fetchCommentsApi,
	postCommentsApi,
} from "../api/comments";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../store/toastSlice";
import type { RootState } from "../../../store/store";
import type { Comment } from "../types";

export const useComment = (taskId: string) => {
	const dispatch = useDispatch();

	const { userData } = useSelector((state: RootState) => state.user);

	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState<Comment[]>([]);

	const [updateLoading, setUpdateLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);

	const postComment = async (text: string) => {
		setUpdateLoading(true);

		const payload = {
			taskId,
			text,
		};
		const result = await postCommentsApi(payload);
		console.log("🚀 ~ postComment ~ result:", result);
		if (result) {
			setComments((curr) => {
				const newComment = {
					...result.comment,
					author: {
						firstName: userData.firstName,
						secondName: userData.lastName,
					},
				};
				return [newComment, ...curr];
			});
			dispatch(
				showToast({
					message: "Comment posted successfully!",
					type: "success",
				})
			);
		}
		setUpdateLoading(false);
	};

	const updateComment = async () => {
		setLoading(true);
		setLoading(false);
	};

	const deleteComment = async (commentId: string) => {
		setDeleteLoading(true);
		const result = await deleteCommentsApi(commentId);
		if (result) {
			setComments((curr) => {
				return curr.filter(({ _id }) => _id !== commentId);
			});
			dispatch(
				showToast({
					message: "Comment deleted successfully!",
					type: "success",
				})
			);
		}
		setDeleteLoading(false);
	};

	const fetchComments = async () => {
		setLoading(true);
		const result = await fetchCommentsApi(taskId);
		console.log("🚀 ~ fetchComments ~ result:", result);
		if (result) {
			setComments(result.comments);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	return {
		comments,
		loading,
		updateLoading,
		deleteLoading,
		postComment,
		updateComment,
		deleteComment,
	};
};
