export type CreateTaskPayload =
	| {
			title: string;
			description: string;
			dueDate: string;
			tags: string[];
			priority: string;
	  }
	| {
			status: string;
	  }
	| {
			assignedTo: string;
	  };

export type Task = {
	_id: string;
	createdAt: string;
	title: string;
	description: string;
	dueDate: string;
	tags: string[];
	priority: string;
	status: string;
	author: {
		firstName: string;
		secondName: string;
	};
	assignedTo?: {
		firstName: string;
		secondName: string;
	};
};

export type Comment = {
	_id: string;
	text: string;
	author: {
		_id: string;
		firstName: string;
		secondName: string;
	};
};

export type UserDetails = {
	_id: string;
	firstName: string;
	secondName: string;
	email: string;
};

export type SearchQuery = {
	searchText: string;
	priorities: {
		medium: boolean;
		high: boolean;
		low: boolean;
	};
};
