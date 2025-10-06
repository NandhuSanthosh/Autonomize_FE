import { Formik, Field } from "formik";

import { taskSchema } from "../validation";
import InputField from "../../../shared/components/atomic/InputField";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";
import { useCreateTask } from "../hooks/useCreateTask";

import type { Task } from "../types";

type Props = {
	handleCancel: () => void;
	data?: Task;
	handleRefresh?: () => void;
};
const TaskForm = ({ handleCancel, data, handleRefresh }: Props) => {
	const { createTask, updateTask, loading } = useCreateTask({
		handleRefresh,
	});
	return (
		<div style={{ padding: "20px" }}>
			<Formik
				initialValues={{
					title: data?.title || "",
					description: data?.description || "",
					priority: data?.priority || "high",
					dueDate: data?.dueDate || "",
					tags: data?.tags ? data.tags.join(", ") : "",
				}}
				onSubmit={async (values) => {
					const payload = {
						...values,
						tags: values.tags
							.split(",")
							.map((t) => t.trim())
							.filter((t) => t),
					};

					let res;
					if (data) {
						res = await updateTask(payload, data._id);
					} else {
						res = await createTask(payload);
					}
					if (res) {
						handleCancel();
					}
				}}
				validationSchema={taskSchema}
			>
				{({ handleSubmit, errors, values }) => {
					console.log(errors, values);
					return (
						<form
							onSubmit={handleSubmit}
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "12px",
							}}
						>
							<div
								className="flex flex-column"
								style={{ gap: "20px" }}
							>
								{/* Title */}
								<InputField
									label="TItle"
									name="title"
									placeholder="Enter title"
									required
								/>

								{/* Description */}
								<InputField
									label="Description"
									name="description"
									placeholder="Enter task description"
									as="textarea"
									rows={4}
									required
								/>

								{/* Priority Dropdown */}
								<div>
									<label
										style={{
											display: "block",
											marginBottom: "6px",
										}}
									>
										<span style={{ color: "red" }}>*</span>
										Priority
									</label>
									<Field
										as="select"
										name="priority"
										style={{
											width: "100%",
											padding: "8px",
										}}
									>
										<option value="high">High</option>
										<option value="medium">Medium</option>
										<option value="low">Low</option>
									</Field>
								</div>

								{/* Due Date */}
								<InputField
									label="Due Date"
									name="dueDate"
									type="date"
									placeholder="Select Due date"
									required
								/>

								{/* Tags (comma-separated) */}
								<InputField
									label="Tags"
									name="tags"
									placeholder="Enter tags (comma separated)"
								/>
							</div>

							<div
								style={{
									marginTop: "40px",
									gap: "20px",
								}}
								className="flex flex-column"
							>
								<GeneralButton
									label={data ? "Update Task" : "Create Task"}
									block
									htmlType="submit"
									loading={loading}
								/>
								<GeneralButton
									label="Cancel"
									block
									type="dashed"
									onClick={handleCancel}
								/>
							</div>

							{/* Submit */}
						</form>
					);
				}}
			</Formik>
		</div>
	);
};

export default TaskForm;
