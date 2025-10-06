import React from "react";
import { useField, useFormikContext } from "formik";
import CustomInput from "./CustomComponent";

type Props = {
	label?: string;
	placeholder: string;
	name: string;
	isHideAble?: boolean;
	classes?: string;
	trim?: boolean;
	type?: string;
	as?: string;
	rows?: number;
	required?: boolean;
};

const InputField: React.FC<Props> = ({
	label,
	placeholder,
	name,
	isHideAble,
	classes = "",
	type,
	trim,
	as,
	rows,
	required,
}) => {
	const { values, setFieldValue } = useFormikContext<any>();

	const [field, meta] = useField(name);
	return (
		<CustomInput
			placeholder={placeholder}
			label={label}
			name={name}
			classes={classes}
			onChange={(value) => {
				setFieldValue(name, value);
			}}
			value={values[name]}
			isHideAble={isHideAble}
			field={field}
			meta={meta}
			trim={trim}
			type={type}
			as={as}
			rows={rows}
			required={required}
		/>
	);
};

export default InputField;
