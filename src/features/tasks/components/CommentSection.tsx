import { useState } from "react";
import { useComment } from "../hooks/useComment";
import Loading from "../../../shared/components/Loading";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";
import CommentItem from "./CommentItem";

type Props = {
	taskId: string;
};

const CommentSection = ({ taskId }: Props) => {
	const [newComment, setNewComment] = useState("");

	const handleAddComment = () => {
		if (newComment.trim() === "") return;
		postComment(newComment);
		setNewComment("");
	};

	const {
		comments,
		loading,
		updateLoading,
		deleteLoading,
		postComment,
		deleteComment,
	} = useComment(taskId);

	if (loading) return <Loading />;
	return (
		<div
			style={{
				borderRadius: "8px",
				padding: "16px",
				margin: "0 auto",
			}}
		>
			<div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
				<input
					type="text"
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					placeholder="Write a comment..."
					style={{
						flex: 1,
						padding: "8px 12px",
						border: "1px solid #d1d5db",
						borderRadius: "6px",
						fontSize: "14px",
						outline: "none",
					}}
				/>
				<GeneralButton
					label="Post"
					onClick={handleAddComment}
					type="primary"
					styles={{ width: "100px" }}
					loading={updateLoading}
				/>
			</div>

			<div
				style={{
					overflowY: "auto",
					paddingRight: "6px",
				}}
			>
				{comments.map((comment) => (
					<CommentItem
						comment={comment}
						deleteComment={deleteComment}
						deleteLoading={deleteLoading}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentSection;
