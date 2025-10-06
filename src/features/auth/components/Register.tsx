import Heading from "./Heading";
import { Link } from "react-router-dom";

import paths from "../../../routes/paths";
import { Formik } from "formik";
import InputField from "../../../shared/components/atomic/InputField";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";

import styles from "../accets/styles.module.css";
import useSignin from "../hooks/useSignin";
import { signinSchema } from "../validations";

const Register = () => {
	const { validateEmailHandler, loading } = useSignin();

	return (
		<div style={{ width: "400px" }}>
			<Heading>Create an account</Heading>
			<div className="flex" style={{ gap: "12px", marginTop: "32px" }}>
				<span>Already have an account?</span>
				<Link
					to={`/${paths.auth.index}/${paths.auth.login}`}
					style={{ textDecoration: "none" }}
				>
					<span>Log in</span>
				</Link>
			</div>

			<div style={{ marginTop: "70px" }}>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						password: "",
					}}
					onSubmit={(values) => {
						validateEmailHandler(values);
					}}
					validationSchema={signinSchema}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<div className={styles.inputWrapper}>
								<div style={{ display: "flex", gap: "25px" }}>
									<InputField
										name="firstName"
										placeholder="First Name"
										trim
									/>
									<InputField
										name="lastName"
										placeholder="Last Name"
									/>
								</div>
								<InputField
									name="email"
									placeholder={"Email"}
									trim
								/>
								<InputField
									name="password"
									placeholder={"Password"}
									isHideAble
									trim
								/>
								<div>
									<GeneralButton
										label={"Log in"}
										block
										htmlType="submit"
										loading={loading}
									/>
								</div>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Register;
