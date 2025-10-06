type Props = {
	active: string;
	handleActiveUpdate: (v: string) => void;
};

export default function CustomButton({ active, handleActiveUpdate }: Props) {
	const baseStyle: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: "6px",
		padding: "6px 12px",
		borderRadius: "8px",
		cursor: "pointer",
		fontSize: "14px",
		fontWeight: 500,
		border: "none",
		backgroundColor: "transparent",
		color: "#333",
		transition: "all 0.2s ease",
	};

	const activeStyle: React.CSSProperties = {
		backgroundColor: "#e6f0ff", // light blue background
		color: "#2563eb", // highlight color
		fontWeight: 600,
	};

	return (
		<div style={{ display: "flex", gap: "12px" }}>
			<button
				style={{
					...baseStyle,
					...(active === "table" ? activeStyle : {}),
				}}
				onClick={() => handleActiveUpdate("table")}
			>
				Table
			</button>

			<button
				style={{
					...baseStyle,
					...(active === "list" ? activeStyle : {}),
				}}
				onClick={() => handleActiveUpdate("list")}
			>
				List View
			</button>
		</div>
	);
}
