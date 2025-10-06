import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { setSigninPage } from "../../../store/userSlice";
import Register from "../components/Register";
import Otp from "../components/Otp";

const Signin = () => {
	const dispatch = useDispatch();

	const { currentPage } = useSelector(
		(state: RootState) => state.user.signinData
	);

	useEffect(() => {
		return () => {
			// dispatch(setSigninPage(1));
		};
	}, []);

	return currentPage === 1 ? <Register /> : <Otp />;
};

export default Signin;
