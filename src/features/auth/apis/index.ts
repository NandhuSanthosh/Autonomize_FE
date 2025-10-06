import axios from "../../../configs/axios";
import type {
	LoginUserData,
	RegisterPayloadWithOtp,
	ValidateEmailPayload,
} from "../types";

export const loginAPI = async (payload: LoginUserData) => {
	try {
		const res = await axios.post("/auth/login", payload);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ loginAPI ~ error:", error);
		return false;
	}
};

export const validateEmailApi = async (payload: ValidateEmailPayload) => {
	try {
		const res = await axios.post("/auth/validate_email", payload);
		console.log("🚀 ~ validateEmailApi ~ res:", res);
		if (!res) return false;

		const { data } = res;
		console.log("🚀 ~ validateEmailApi ~ data:", data);
		return data.data;
	} catch (error) {
		console.log("🚀 ~ loginApi ~ error:", error);
		return false;
	}
};

export const signinApi = async (payload: RegisterPayloadWithOtp) => {
	try {
		const res = await axios.post("/auth/signin", payload);
		if (!res) return false;

		const { data } = res;
		return data.data;
	} catch (error) {
		console.log("🚀 ~ signinApi ~ error:", error);
		return false;
	}
};
