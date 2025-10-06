import React from "react";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	open,
	onClose,
	title,
	children,
	footer,
}) => {
	if (!open) return null;

	return (
		<div style={styles.overlay}>
			{/* Background Overlay */}
			<div style={styles.backdrop} onClick={onClose}></div>

			{/* Modal Box */}
			<div style={styles.modal}>
				{/* Header */}
				{title && (
					<div style={styles.header}>
						<h2 style={styles.title}>{title}</h2>
						<button style={styles.closeBtn} onClick={onClose}>
							×
						</button>
					</div>
				)}

				{/* Content */}
				<div style={styles.content}>{children}</div>

				{/* Footer */}
				{footer && <div style={styles.footer}>{footer}</div>}
			</div>
		</div>
	);
};

export default Modal;

// Inline Styles
const styles: { [key: string]: React.CSSProperties } = {
	overlay: {
		position: "fixed",
		inset: "0",
		zIndex: 1000,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	backdrop: {
		position: "absolute",
		inset: "0",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	modal: {
		position: "relative",
		background: "#fff",
		borderRadius: "8px",
		boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
		width: "90%",
		maxWidth: "800px",
		padding: "20px",
		zIndex: 1001,
		animation: "fadeIn 0.25s ease-out",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "15px",
	},
	title: {
		fontSize: "18px",
		fontWeight: 600,
		margin: 0,
	},
	closeBtn: {
		fontSize: "20px",
		background: "none",
		border: "none",
		cursor: "pointer",
		color: "#666",
	},
	content: {
		marginBottom: "15px",
	},
	footer: {
		borderTop: "1px solid #eee",
		paddingTop: "10px",
		textAlign: "right",
	},
};
