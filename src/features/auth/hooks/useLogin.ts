import { useState } from "react";
import type { LoginUserData } from "../types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../apis";
import {
	setAccessToken,
	setRefreshToken,
	setUserDetails,
} from "../../../store/userSlice";

export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const loginHandler = async (userData: LoginUserData) => {
		setIsLoading(true);
		const result = await loginAPI(userData);

		if (result && result.accessToken && result.refreshToken) {
			dispatch(setAccessToken({ accessToken: result.accessToken }));
			dispatch(setRefreshToken({ refreshToken: result.refreshToken }));
			dispatch(setUserDetails({ userData: result.userData }));
			navigate("/", { replace: true });
		}

		setIsLoading(false);
	};

	return {
		isLoading,
		loginHandler,
	};
};
