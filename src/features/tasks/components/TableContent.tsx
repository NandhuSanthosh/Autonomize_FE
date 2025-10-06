import React, { useEffect, useState } from "react";

import Section from "./Section";
import type { SearchQuery, Task } from "../types";

import styles from "../accets/styles.module.css";
import { useFetchTasks } from "../hooks/useFetchTasks";
import Loading from "../../../shared/components/Loading";

const initialArray: {
	status: string;
	tasks: Task[];
}[] = [
	{
		status: "todo",
		tasks: [],
	},
	{
		status: "inprogress",
		tasks: [],
	},
	{
		status: "inreview",
		tasks: [],
	},
	{
		status: "done",
		tasks: [],
	},
];

type Props = {
	query: SearchQuery;
};

const TableContent = ({ query }: Props) => {
	const { tasks, loading } = useFetchTasks(query);

	const [formattedTasks, setFormattedTasks] = useState(initialArray); // todo, inprogress, inreview, done

	useEffect(() => {
		const array = structuredClone(initialArray);
		const statuses = ["todo", "inprogress", "inreview", "done"];
		tasks.forEach((task) => {
			const index = statuses.indexOf(task.status);
			array[index].tasks.push(task);
		});
		setFormattedTasks(array);
	}, [tasks]);

	if (loading) return <Loading />;

	return (
		<div className={styles.contentContainer}>
			{formattedTasks.map((curr, index) => (
				<Section label={curr.status} tasks={curr.tasks} key={index} />
			))}
		</div>
	);
};

export default TableContent;
