import { useState } from "react";
import CustomInput from "../../../shared/components/atomic/InputField/CustomComponent";
import Heading from "./Heading";
import GeneralButton from "../../../shared/components/atomic/GeneralButton";
import { useDispatch } from "react-redux";
import { setSigninPage } from "../../../store/userSlice";
import useSignin from "../hooks/useSignin";

const Otp = () => {
	const dispatch = useDispatch();

	const [otp, setOtp] = useState("");

	const { handleSignin, loading } = useSignin();
	return (
		<div style={{ width: "400px" }}>
			<Heading>Verifcation Code</Heading>
			<div className="flex" style={{ gap: "12px", marginTop: "32px" }}>
				<span>
					Please enter verification code sent to you email id.
				</span>
			</div>
			<div style={{ marginTop: "20px" }}>
				<CustomInput
					value={otp}
					name="otp"
					placeholder="OTP"
					onChange={setOtp}
					customValidation={(v) => v.replace(/\D+/g, "")}
					trim
					maxLength={6}
				/>
				<div className="mt-5">
					<GeneralButton
						label={"Submit"}
						block
						styles={{ marginTop: "10px" }}
						onClick={() => {
							handleSignin(otp);
						}}
						loading={loading}
					/>
					<GeneralButton
						label={"Back    "}
						block
						styles={{ marginTop: "10px" }}
						type="default"
						onClick={() => {
							dispatch(setSigninPage(1));
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Otp;
