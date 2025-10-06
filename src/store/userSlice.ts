import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: null,
	refreshToken: null,
	signinData: {
		userDetails: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		currentPage: 1,
	},
	userData: {
		firstName: "",
		lastName: "",
		email: "",
		id: "",
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		resetTokens: (state) => {
			state.accessToken = null;
			state.refreshToken = null;
		},
		setAccessToken: (state, action) => {
			state.accessToken = action.payload.accessToken;
		},
		setRefreshToken: (state, action) => {
			state.refreshToken = action.payload.refreshToken;
		},
		setUserDetails: (state, action) => {
			state.userData = action.payload.userData;
		},
		setSigninUserDetails: (state, action) => {
			state.signinData.userDetails = action.payload;
		},
		setSigninPage: (state, action) => {
			state.signinData.currentPage = action.payload;
		},
	},
});

export const {
	resetTokens,
	setAccessToken,
	setRefreshToken,
	setUserDetails,
	setSigninUserDetails,
	setSigninPage,
} = userSlice.actions;
export default userSlice.reducer;
