import CustomButton from "./CustomButton";

import styles from "../accets/styles.module.css";
import TaskFilter from "./TaskFilter";

type Props = {
	active: string;
	handleActiveUpdate: (v: string) => void;
	query: any;
	setQuery: (q: any) => void;
};
const Header = ({ active, handleActiveUpdate, query, setQuery }: Props) => {
	return (
		<div className={styles.headerWrapper}>
			<CustomButton
				active={active}
				handleActiveUpdate={handleActiveUpdate}
			/>
			<TaskFilter query={query} setQuery={setQuery} />
		</div>
	);
};

export default Header;
