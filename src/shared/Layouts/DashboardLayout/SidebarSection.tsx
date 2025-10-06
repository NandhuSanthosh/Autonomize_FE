import styles from "./styles.module.css";
import ListItem from "./ListItem";
import type { Task } from "../../../features/tasks/types";

type Props = {
	heading: string;
	list: Task[];
};
const SectionOne = ({ heading, list }: Props) => {
	console.log("🚀 ~ SectionOne ~ list:", list);

	return (
		<div>
			<div
				style={{
					paddingLeft: "30px",
					color: "#8b8b8bff",
					fontSize: "14px",
					marginBottom: "20px",
				}}
			>
				{heading}
			</div>

			<div className={`${styles.navItem}`} style={{ padding: "10px" }}>
				{list.map((item: any, index: number) => (
					<ListItem
						href={item.href}
						index={index}
						icon={item.icon}
						label={item.label}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionOne;
