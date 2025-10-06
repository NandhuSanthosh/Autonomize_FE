import React, { useState } from "react";
import type { Comment } from "../types";

type Props = {
	comment: Comment;
	deleteComment: (commentId: string) => void;
	deleteLoading: boolean;
};
const CommentItem = ({ comment, deleteComment, deleteLoading }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			key={comment._id}
			style={{
				marginBottom: "12px",
				paddingBottom: "8px",
				borderBottom: "1px solid #f3f4f6",
				padding: "5px 8px",
				borderRadius: "5px",
				background: isHovered ? "#ebebebff" : "none",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex" style={{ justifyContent: "space-between" }}>
				<div>
					<span
						style={{
							display: "block",
							fontWeight: 500,
							fontSize: "14px",
							color: "#2563eb",
						}}
					>
						{comment.author?.firstName} {comment.author?.secondName}
					</span>
				</div>
				<div>
					<button
						onClick={() => {
							deleteComment(comment._id);
						}}
						style={{
							display: isHovered ? "block" : "none",
							background: "none",
							border: "none",
							color: deleteLoading ? "#ef44444e" : "#ef4444",
							fontSize: "14px",
							fontWeight: 500,
							cursor: deleteLoading ? "not-allowed" : "pointer",
							height: "14px",
						}}
						disabled={deleteLoading}
					>
						Delete
					</button>
				</div>
			</div>
			<p
				style={{
					margin: "4px 0 0",
					fontSize: "14px",
					color: "#374151",
				}}
			>
				{comment.text}
			</p>
		</div>
	);
};

export default CommentItem;
