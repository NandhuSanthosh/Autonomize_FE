import ListItem from "./ListItem";

import styles from "../accets/styles.module.css";
import Loading from "../../../shared/components/Loading";
import { useFetchTasks } from "../hooks/useFetchTasks";
import type { SearchQuery } from "../types";
import Pagination from "./Pagination";
import { useState } from "react";

type Props = {
	query: SearchQuery;
};

const TableContent = ({ query }: Props) => {
	const [currentPage, setCurrentPage] = useState(1);

	const { tasks, count, loading, handleRefresh } = useFetchTasks(
		query,
		currentPage
	);

	if (loading) return <Loading />;
	return (
		<div className={`${styles.contentContainer} flex-column`}>
			{tasks.map((task) => (
				<ListItem
					key={task._id}
					task={task}
					handleRefresh={handleRefresh}
				/>
			))}
			<Pagination
				currentPage={currentPage}
				totalPages={count}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};

export default TableContent;
