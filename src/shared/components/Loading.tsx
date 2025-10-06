const Loading = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				backgroundColor: "#f9fafb",
			}}
		>
			{/* Spinner */}
			<div
				style={{
					border: "6px solid #e5e7eb",
					borderTop: "6px solid #3b82f6",
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					animation: "spin 1s linear infinite",
					marginBottom: "16px",
				}}
			/>

			<p style={{ color: "#374151", fontSize: "16px" }}>Loading...</p>

			<style>
				{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
			</style>
		</div>
	);
};

export default Loading;
