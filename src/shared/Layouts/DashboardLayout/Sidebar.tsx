import SectionOne from "./SidebarSection";
import ListItem from "./ListItem";

import styles from "./styles.module.css";

type Props = {
	toggleSideBar: () => void;
	hideSideBar: boolean;
};

const Sidebar = ({ hideSideBar, toggleSideBar }: Props) => {
	const menuList = [
		{
			icon: (isActive: boolean) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="18px"
					viewBox="0 0 24 24"
					width="18px"
					fill={isActive ? "#3772ff" : "rgb(103, 103, 103)"}
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
				</svg>
			),
			label: "Dashboard",
			href: "/",
		},
		{
			icon: (isActive: boolean) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="18px"
					viewBox="0 0 24 24"
					width="18px"
					fill={isActive ? "#3772ff" : "rgb(103, 103, 103)"}
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
				</svg>
			),
			label: "Tasks",
			href: "/tasks",
		},
		{
			icon: (isActive: boolean) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="18px"
					viewBox="0 0 24 24"
					width="18px"
					fill={isActive ? "#3772ff" : "rgb(103, 103, 103)"}
				>
					<g>
						<rect fill="none" height="24" width="24" />
					</g>
					<g>
						<polygon points="15,16 15,17.26 9,14.26 9,11.09 11.7,8 16,8 16,2 10,2 10,6.9 7.3,10 3,10 3,16 8,16 15,19.5 15,22 21,22 21,16" />
					</g>
				</svg>
			),
			label: "Mine",
			href: "/mine",
		},
	];

	return (
		<div>
			<div className={`${styles.sidebar} ${hideSideBar && styles.hide}`}>
				<div className={`${styles.sidebarTop}`}>
					{/* icon */}
					<div
						style={{
							paddingLeft: "30px",
							height: "80px",
							display: "flex",
							alignItems: "center",
						}}
						onClick={toggleSideBar}
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

					{/* divider */}
					<div className={`${styles.divider}`} />

					{/* first section */}
					<div
						style={{
							marginTop: "20px",
						}}
					>
						<SectionOne heading={"Menu"} list={menuList} />
					</div>
				</div>

				<div>
					{/* divider */}
					<div className={`${styles.divider}`} />

					<div style={{ padding: "10px" }}>
						<ListItem
							href={"/settings"}
							index={1}
							icon={() => (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									enable-background="new 0 0 24 24"
									height="18px"
									viewBox="0 0 24 24"
									width="18px"
									fill="rgb(103, 103, 103)"
								>
									<g>
										<path d="M0,0h24v24H0V0z" fill="none" />
										<path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
									</g>
								</svg>
							)}
							label={"Settings"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
