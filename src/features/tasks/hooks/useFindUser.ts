import { useState } from "react";
import { finduserApi } from "../api";
import type { UserDetails } from "../types";

export const useFindUser = () => {
	const [loading, setLoading] = useState(false);
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

	const fetchUser = async (email: string) => {
		setLoading(true);
		const res = await finduserApi(email);
		if (res) {
			setUserDetails(res.user);
		}
		setLoading(false);
	};
	return { loading, userDetails, fetchUser };
};
