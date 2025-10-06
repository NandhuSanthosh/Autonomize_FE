import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f8f9fa",
				color: "#2c3e50",
				textAlign: "center",
				fontFamily: "Arial, sans-serif",
				padding: "20px",
			}}
		>
			<h1 style={{ fontSize: "96px", margin: "0", fontWeight: "900" }}>
				404
			</h1>
			<h2 style={{ fontSize: "28px", margin: "10px 0" }}>
				Oops! Page Not Found
			</h2>
			<p
				style={{
					fontSize: "16px",
					color: "#6c757d",
					marginBottom: "20px",
				}}
			>
				The page you’re looking for doesn’t exist or has been moved.
			</p>
			<button
				onClick={() => navigate("/", { replace: true })}
				style={{
					padding: "12px 24px",
					fontSize: "16px",
					fontWeight: "600",
					border: "none",
					borderRadius: "6px",
					backgroundColor: "#3498db",
					color: "#fff",
					cursor: "pointer",
					transition: "background-color 0.3s",
				}}
				onMouseOver={(e) =>
					(e.currentTarget.style.backgroundColor = "#2980b9")
				}
				onMouseOut={(e) =>
					(e.currentTarget.style.backgroundColor = "#3498db")
				}
			>
				Go Home
			</button>
		</div>
	);
}
