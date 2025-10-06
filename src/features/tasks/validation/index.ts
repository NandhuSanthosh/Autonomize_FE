import * as yup from "yup";

export const taskSchema = yup.object({
	title: yup
		.string()
		.trim()
		.required("Title is required")
		.min(3, "Title must be at least 3 characters")
		.max(100, "Title cannot exceed 100 characters"),

	description: yup
		.string()
		.trim()
		.required("Description is required")
		.min(10, "Description must be at least 10 characters")
		.max(1000, "Description cannot exceed 1000 characters"),

	priority: yup
		.string()
		.required("Priority is required")
		.oneOf(
			["low", "medium", "high"],
			"Priority must be Low, Medium, or High"
		),

	dueDate: yup
		.date()
		.required("Due date is required")
		.min(new Date(), "Due date cannot be in the past"),

	tags: yup
		.string()
		.min(1, "At least one tag is required")
		.max(10, "No more than 10 tags are allowed"),
});
