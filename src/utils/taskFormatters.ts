export const getFormattedPriority = (priority: string) => {
	switch (priority.toLowerCase()) {
		case "high":
			return { color: "#ff2d2932", label: "High" };
		case "medium":
			return { color: "#f59f0b3e", label: "Medium" };
		case "low":
			return { color: "#10b98150", label: "Low" };
		default:
			return { color: "#6b7280", label: "Unknown" }; // fallback
	}
};
