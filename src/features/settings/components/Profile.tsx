import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

export default function Profile() {
	const pageStyle: React.CSSProperties = {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		fontFamily: "sans-serif",
		boxSizing: "border-box",
	};

	const containerStyle: React.CSSProperties = {
		width: "100%",
		maxWidth: "900px",
		overflow: "hidden",
		background: "white",
	};

	const headerStyle: React.CSSProperties = {
		padding: "24px 32px",
		borderBottom: "1px solid #eee",
		fontSize: "20px",
		fontWeight: 600,
		color: "#111",
	};

	const sectionStyle: React.CSSProperties = {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px 32px",
		borderBottom: "1px solid #f0f0f0",
	};

	const labelStyle: React.CSSProperties = {
		fontWeight: 500,
		fontSize: "14px",
		color: "#666",
		width: "100px",
		display: "block",
	};

	const valueStyle: React.CSSProperties = {
		fontSize: "15px",
		fontWeight: 600,
		color: "#222",
		whiteSpace: "normal",
		overflowWrap: "break-word",
	};

	const footerStyle: React.CSSProperties = {
		padding: "20px 32px",
		textAlign: "right",
	};

	const buttonStyle: React.CSSProperties = {
		padding: "10px 16px",
		borderRadius: "8px",
		border: "none",
		background: "#2563eb",
		color: "#fff",
		fontWeight: 600,
		cursor: "pointer",
	};

	const { userData } = useSelector((state: RootState) => state.user);
	console.log("🚀 ~ Profile ~ user:", userData);

	return (
		<div style={pageStyle}>
			<div style={containerStyle}>
				{/* Header */}
				<div style={headerStyle}>User Profile</div>

				{/* Profile Fields */}
				<div style={sectionStyle}>
					<span style={labelStyle}>First Name</span>
					<span style={valueStyle}>{userData.firstName}</span>
				</div>

				<div style={sectionStyle}>
					<span style={labelStyle}>Last Name</span>
					<span style={valueStyle}>{userData.lastName}</span>
				</div>

				<div style={sectionStyle}>
					<div style={labelStyle}>Email</div>
					<p style={valueStyle}>{userData.email}</p>
				</div>

				{/* Footer with Edit Button */}
				<div style={footerStyle}>
					<button style={buttonStyle}>Edit Profile</button>
				</div>
			</div>
		</div>
	);
}
