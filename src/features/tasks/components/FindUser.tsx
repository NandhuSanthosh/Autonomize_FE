import { useState } from "react";
import { useFindUser } from "../hooks/useFindUser";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";
import { useCreateTask } from "../hooks/useCreateTask";

type Props = {
	taskId: string;
	handleRefresh: () => void;
	handleCancel: () => void;
};
const FindUser = ({ taskId, handleRefresh, handleCancel }: Props) => {
	const [query, setQuery] = useState("");

	const { loading, userDetails, fetchUser } = useFindUser();
	const handleSearch = () => {
		fetchUser(query);
	};

	const { updateTask } = useCreateTask({ handleRefresh });
	return (
		<div
			style={{
				maxWidth: "600px",
				margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				gap: "12px",
			}}
		>
			{/* Input + Search Button */}
			<div style={{ display: "flex", gap: "8px" }}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter email"
					style={{
						flex: 1,
						padding: "8px 12px",
						border: "1px solid #d1d5db",
						borderRadius: "6px",
						fontSize: "14px",
						outline: "none",
					}}
				/>
				<GeneralButton
					label="Search"
					onClick={handleSearch}
					styles={{
						width: "150px",
					}}
					loading={loading}
				/>
			</div>

			{/* Result Box */}
			<div
				style={{
					height: "300px",
					overflowY: "auto",
					border: "1px solid #e5e7eb",
					borderRadius: "6px",
					backgroundColor: "#ffffff",
				}}
			>
				{!userDetails && (
					<p style={{ textAlign: "center", paddingTop: "12px" }}>
						No records
					</p>
				)}
				{userDetails && (
					<div
						className="flex flex-column"
						style={{
							padding: "12px 18px",
							background: "#f0f0f0ff",
						}}
						onClick={async () => {
							const res = await updateTask(
								{ assignedTo: userDetails._id },
								taskId
							);
							console.log("🚀 ~ res:", res);
							if (res) {
								handleCancel();
							}
						}}
					>
						<span
							style={{
								fontWeight: 500,
							}}
						>
							{userDetails.firstName} {userDetails.secondName}
						</span>
						<span>{userDetails.email} </span>
					</div>
				)}
				{/* ))
				)} */}
			</div>
		</div>
	);
};

export default FindUser;
