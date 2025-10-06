import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../store/store";
import { signinApi, validateEmailApi } from "../apis";
import type { RegisterPayload } from "../types";
import {
	setAccessToken,
	setRefreshToken,
	setSigninPage,
	setSigninUserDetails,
} from "../../../store/userSlice";

const useSignin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const { userDetails } = useSelector(
		(state: RootState) => state.user.signinData
	);

	async function validateEmailHandler(values: RegisterPayload) {
		setLoading(true);

		const res = await validateEmailApi({
			email: values.email,
		});

		setLoading(false);
		if (res) {
			dispatch(setSigninUserDetails(values));
			dispatch(setSigninPage(2));
		}
	}

	async function handleSignin(otp: string) {
		setLoading(true);

		const payload = {
			...userDetails,
			otp,
		};

		const res = await signinApi(payload);
		if (res) {
			dispatch(setAccessToken({ accessToken: res.accessToken }));
			dispatch(setRefreshToken({ refreshToken: res.refreshToken }));
			navigate("/", { replace: true });
		}
		setLoading(false);
	}

	return {
		handleSignin,
		validateEmailHandler,
		loading,
	};
};

export default useSignin;
