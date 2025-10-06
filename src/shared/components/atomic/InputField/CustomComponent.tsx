import React, { useState } from "react";
import styles from "./style.module.css";
import { type FieldInputProps, type FieldMetaProps } from "formik";

type CustomInputProps = {
	name: string;
	placeholder?: string;
	label?: string;
	value?: string;
	classes?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (e: any) => void;
	type?: string;
	isHideAble?: boolean;
	field?: FieldInputProps<any>;
	meta?: FieldMetaProps<any>;
	trim?: boolean;
	maxLength?: number;
	customValidation?: (v: string) => string;
	as?: string;
	rows?: number;
	required?: boolean;
};

const CustomInput: React.FC<CustomInputProps> = ({
	name,
	value,
	placeholder,
	onChange,
	label,
	isHideAble,
	classes = "",
	type = "text",
	meta,
	field = {},
	trim,
	maxLength,
	customValidation,
	as,
	rows = 1,
	required,
}) => {
	const [isHide, setIsHide] = useState(false);

	const Component = as === "textarea" ? "textarea" : "input";

	return (
		<div>
			{label && (
				<label htmlFor={name} className={`${styles.customInputLabel}`}>
					{required && <span style={{ color: "red" }}>*</span>}
					{label}
				</label>
			)}
			<div className={styles.customInputWrapper}>
				<Component
					{...field}
					id={name}
					name={name}
					type={isHide ? "password" : type}
					value={value}
					placeholder={placeholder}
					maxLength={maxLength}
					style={{
						width: "100%",
						resize: "none",
					}}
					rows={rows}
					className={`${styles.customInput} ${classes}`}
					onChange={(e) => {
						if (onChange) {
							let value = e.target.value;
							if (trim) {
								value = value.trim();
							}
							if (customValidation) {
								value = customValidation(value);
							}
							onChange(value);
						}
					}}
				/>
				{isHideAble &&
					(isHide ? (
						<button
							onClick={() => setIsHide(false)}
							className={styles.hideButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								width="18px"
								fill="#666666"
							>
								<path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
							</svg>
						</button>
					) : (
						<button
							onClick={() => setIsHide(true)}
							className={styles.hideButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								width="18px"
								fill="#666666"
							>
								<path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
							</svg>
						</button>
					))}
			</div>
			{meta?.touched && meta?.error && (
				<label htmlFor={name} className={`${styles.errorMessage}`}>
					{meta.error}
				</label>
			)}
		</div>
	);
};

export default CustomInput;
