type Props = {
	query: any;
	setQuery: (q: any) => void;
};

const TaskFilter = ({ query, setQuery }: Props) => {
	const handleCheckboxChange = (
		priority: "high" | "medium" | "low",
		value: boolean
	) => {
		setQuery({
			...query,
			priorities: {
				...query.priorities,
				[priority]: value,
			},
		});
	};

	const handleSearchBoxChange = (value: string) => {
		setQuery({
			...query,
			searchText: value,
		});
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "16px",
			}}
		>
			{/* Search Box */}
			<input
				type="text"
				placeholder="Search tasks..."
				value={query.serachText}
				onChange={(e) => handleSearchBoxChange(e.target.value)}
				style={{
					flex: 1,
					padding: "8px 12px",
					border: "1px solid #d1d5db",
					borderRadius: "6px",
					fontSize: "14px",
					outline: "none",
				}}
			/>

			{/* Priority Checkboxes */}
			<div style={{ display: "flex", gap: "12px" }}>
				<label style={{ fontSize: "14px" }}>
					<input
						type="checkbox"
						checked={query.priorities.high}
						onChange={(e) => {
							handleCheckboxChange("high", e.target.checked);
						}}
						style={{ marginRight: "4px" }}
					/>
					High
				</label>

				<label style={{ fontSize: "14px" }}>
					<input
						type="checkbox"
						checked={query.priorities.medium}
						onChange={(e) =>
							handleCheckboxChange("medium", e.target.checked)
						}
						style={{ marginRight: "4px" }}
					/>
					Mid
				</label>

				<label style={{ fontSize: "14px" }}>
					<input
						type="checkbox"
						checked={query.priorities.low}
						onChange={(e) =>
							handleCheckboxChange("low", e.target.checked)
						}
						style={{ marginRight: "4px" }}
					/>
					Low
				</label>
			</div>
		</div>
	);
};

export default TaskFilter;
