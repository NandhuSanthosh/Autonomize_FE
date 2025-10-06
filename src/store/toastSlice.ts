import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: "",
	type: "", // success | error | warning | info
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		showToast: (state, action) => {
			const data = action.payload;
			state.message = data.message;
			state.type = data.type;
		},
		resetToast: (state) => {
			state.message = "";
			state.type = "";
		},
	},
});

export const { showToast, resetToast } = toastSlice.actions;
export default toastSlice.reducer;
