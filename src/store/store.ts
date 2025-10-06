import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import toastReducer from "./toastSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
	toast: toastReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const persister = persistStore(store);
