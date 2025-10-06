import axios from "axios";
import { store } from "../store/store";

import { showToast } from "../store/toastSlice";
import paths from "../routes/paths";

const instance = axios.create({
	baseURL: "http://localhost:8080/api/v1",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(function (config) {
	const state = store.getState();
	const { accessToken, refreshToken } = state.user;

	if (
		config.url === `/${paths.auth.index}/${paths.auth.refresh}` &&
		refreshToken
	) {
		config.headers.Authorization = `Bearer ${refreshToken}`;
	} else if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

instance.interceptors.response.use(
	(response) => response, // api success case
	(error) => {
		const { data } = error.response;

		if (data.responseCode === "001") {
			store.dispatch(
				showToast({
					message: data?.message || "Something went wrong",
					type: "error",
				})
			);
		}
		return Promise.reject(error);
	}
);

export default instance;
