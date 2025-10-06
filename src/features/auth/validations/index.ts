import * as yup from "yup";

export const loginSchema = yup.object({
	email: yup
		.string()
		.trim()
		.lowercase()
		.email("Invalid email address")
		.required("Email is required"),

	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/\d/, "Password must contain at least one number")
		.matches(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		),
});

export const signinSchema = yup.object({
	firstName: yup
		.string()
		.trim()
		.required("First name is required")
		.min(3, "First name must be at least 2 characters")
		.max(50, "First name must be at most 50 characters")
		.matches(
			/^(?!.*\s{2,})/,
			"First name cannot contain multiple consecutive spaces"
		),

	lastName: yup
		.string()
		.trim()
		.required("Last name is required")
		.min(3, "Last name must be at least 2 characters")
		.max(50, "Last name must be at most 50 characters")
		.matches(
			/^(?!.*\s{2,})/,
			"Last name cannot contain multiple consecutive spaces"
		),

	email: yup
		.string()
		.trim()
		.lowercase()
		.email("Invalid email address")
		.required("Email is required"),

	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/\d/, "Password must contain at least one number")
		.matches(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		),
});
