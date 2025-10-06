import React, { type ReactNode } from "react";

type Props = {
	label: string | ReactNode;
	block?: boolean;
	loading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	type?: "primary" | "link" | "text" | "default" | "dashed";
	htmlType?: "button" | "submit" | "reset" | undefined;
	styles?: any;
};

const GeneralButton: React.FC<Props> = ({
	label,
	loading,
	disabled,
	onClick,
	type = "primary",
	htmlType = "button",
	styles = {},
}) => {
	const customStyles: React.CSSProperties = {
		position: "relative",
		padding: "10px 15px",
		width: "100%",
		fontSize: "16px",
		fontWeight: 500,
		color: type === "primary" ? "#fff" : "#000",
		backgroundColor: type === "primary" ? "#2563eb" : "#fff",
		border: `1px solid ${type === "primary" ? "#2563eb" : "#d9d9d9"}`,
		borderRadius: "6px",
		cursor: disabled ? "not-allowed" : "pointer",
		transition: "all 0.3s",
		opacity: disabled || loading ? 0.5 : 1,
		...styles,
	};

	// if (loading) {
	// 	styles = {};
	// }

	return (
		<button
			type={htmlType}
			// className={`${classes}`}
			disabled={disabled}
			onClick={onClick}
			style={customStyles}
		>
			{label}
			{loading && (
				<div>
					<div
						style={{
							display: "inline-block",
							animation: "spin 1s linear infinite",
							position: "absolute",
							right: "10px",
							top: "10px",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16px"
							viewBox="0 -960 960 960"
							width="16px"
							fill="#e3e3e3"
							style={{
								display: "block",
							}}
						>
							<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
						</svg>
					</div>

					<style>
						{`@keyframes spin {
							100% { transform: rotate(360deg); }
						}`}
					</style>
				</div>
			)}
		</button>
	);
};

export default GeneralButton;
