import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div
			style={{
				display: "flex",
				gap: "8px",
				justifyContent: "center",
				alignItems: "center",
				margin: "16px 0",
			}}
		>
			{/* Previous Button */}
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				style={{
					padding: "6px 12px",
					border: "1px solid #d1d5db",
					backgroundColor: currentPage === 1 ? "#f3f4f6" : "white",
					cursor: currentPage === 1 ? "not-allowed" : "pointer",
					borderRadius: "4px",
				}}
			>
				Prev
			</button>

			{/* Page Numbers */}
			{pages.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					style={{
						padding: "6px 12px",
						border: "1px solid #d1d5db",
						backgroundColor:
							currentPage === page ? "#2563eb" : "white",
						color: currentPage === page ? "white" : "black",
						cursor: "pointer",
						borderRadius: "4px",
					}}
				>
					{page}
				</button>
			))}

			{/* Next Button */}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				style={{
					padding: "6px 12px",
					border: "1px solid #d1d5db",
					backgroundColor:
						currentPage === totalPages ? "#f3f4f6" : "white",
					cursor:
						currentPage === totalPages ? "not-allowed" : "pointer",
					borderRadius: "4px",
				}}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
