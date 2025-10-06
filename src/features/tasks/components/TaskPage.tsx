import type { SearchQuery } from "../types";
import Header from "./Header";
import ListContent from "./ListContent";
import TableContent from "./TableContent";
import { useState } from "react";

const TaskPage = () => {
	const [active, setActive] = useState("table");

	const handleActiveUpdate = (v: string) => setActive(v);

	const [query, setQuery] = useState<SearchQuery>({
		searchText: "",
		priorities: {
			high: false,
			medium: false,
			low: false,
		},
	});

	return (
		<div
			className="flex-1 flex flex-column"
			style={{
				height: "91vh",
				overflow: "auto",
				scrollbarWidth: "thin",
				scrollbarColor: "#ffffffff",
			}}
		>
			{/* header */}
			<Header
				active={active}
				handleActiveUpdate={handleActiveUpdate}
				query={query}
				setQuery={setQuery}
			/>

			{/* content */}
			{active === "table" && <TableContent query={query} />}
			{active === "list" && <ListContent query={query} />}
		</div>
	);
};

export default TaskPage;
