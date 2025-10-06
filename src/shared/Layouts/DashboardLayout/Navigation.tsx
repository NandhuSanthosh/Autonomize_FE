import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetTokens } from "../../../store/userSlice";
import paths from "../../../routes/paths";
import GeneralButton from "../../components/atomic/GeneralButton";

import styles from "./styles.module.css";
import CreateTaskModal from "../../../features/tasks/components/CreateTaskModal";

type Props = {
	toggleSideBar: () => void;
};

const Navigation = ({ toggleSideBar }: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	return (
		<div
			style={{
				height: "9vh",
				width: "100%",
				borderBottom: "1px solid rgb(231, 230, 230)",
				paddingInline: "20px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: "100%",
				}}
			>
				{/* icon */}
				<div>
					<div
						style={{
							height: "80px",
							display: "flex",
							alignItems: "center",
						}}
						onClick={toggleSideBar}
						className={`${styles.navLogo}`}
					>
						<span
							style={{
								fontSize: "30px", // big enough for logo
								fontWeight: "700", // bold
								fontFamily: "Arial, Helvetica, sans-serif", // clean font
								color: "#3772ff", // dark gray-blue
								letterSpacing: "1px", // slight spacing
								textTransform: "uppercase", // gives logo feel
								cursor: "default", // no pointer on hover
							}}
						>
							Taskly
						</span>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						gap: "16px",
					}}
				>
					{/* create task button */}
					<GeneralButton
						label={
							<div
								style={{
									display: "flex",
									alignItems: "center",
									fontSize: "12px",
								}}
							>
								Create Task{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="18px"
									viewBox="0 0 24 24"
									width="18px"
									fill="#e3e3e3"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
								</svg>
							</div>
						}
						styles={{
							padding: "5px 15px",
							fontSize: "16px",
						}}
						onClick={() => setOpen(true)}
					/>

					{/* logout button */}
					<button
						style={{
							border: "none",
							background: "none",
							cursor: "pointer",
						}}
						onClick={() => {
							dispatch(resetTokens());
							navigate(
								`/${paths.auth.index}/${paths.auth.login}`,
								{ replace: true }
							);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#434343ff"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
						</svg>
					</button>
				</div>
			</div>

			<CreateTaskModal open={open} setOpen={setOpen} />
		</div>
	);
};

export default Navigation;
