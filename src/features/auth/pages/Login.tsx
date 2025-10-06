import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import paths from "../../../routes/paths";
import Heading from "../components/Heading";
import InputField from "../../../shared/components/atomic/InputField";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";

import styles from "../accets/styles.module.css";
import { useLogin } from "../hooks/useLogin";
import { loginSchema } from "../validations";

const Login = () => {
	const { loginHandler, isLoading } = useLogin();

	// const { accessToken } = useSelector((state) => state.user);
	return (
		<div style={{ width: "400px" }}>
			<Heading>Log in to your Account</Heading>
			<div
				className="flex"
				style={{
					gap: "12px",
					marginTop: "32px",
					alignItems: "baseline",
				}}
			>
				<span>Don’t have an account?</span>
				<Link
					to={`/${paths.auth.index}/${paths.auth.signin}`}
					style={{ fontSize: "14px" }}
				>
					<span>Sign up</span>
				</Link>
			</div>

			<div style={{ marginTop: "70px" }}>
				<Formik
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => {
						loginHandler(values);
					}}
					validationSchema={loginSchema}
				>
					{({ handleSubmit }) => {
						return (
							<form onSubmit={handleSubmit}>
								<div className={styles.inputWrapper}>
									<InputField
										name="email"
										placeholder={"Email"}
										trim
									/>
									<InputField
										name="password"
										placeholder={"Passwords"}
										isHideAble
										trim
									/>
									<div className="mt-5">
										<GeneralButton
											label={"Log in"}
											block
											htmlType="submit"
											loading={isLoading}
										/>
									</div>
								</div>
							</form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
