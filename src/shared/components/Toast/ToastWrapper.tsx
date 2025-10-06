import { useEffect, type ReactNode } from "react";

import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetToast } from "../../../store/toastSlice";
import type { RootState } from "../../../store/store";

const ToastWrapper = ({ children }: { children: ReactNode }) => {
	const dispatch = useDispatch();

	const { toast } = useSelector((store: RootState) => store);

	const { message } = toast;

	let typeClass, icon;
	switch (toast.type) {
		case "error":
			typeClass = styles.error;
			icon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="70%"
					viewBox="0 -960 960 960"
					fill="#fff"
				>
					<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
				</svg>
			);
			break;
		case "success":
			typeClass = styles.success;
			icon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="70%"
					viewBox="0 -960 960 960"
					fill="#fff"
				>
					<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
				</svg>
			);
			break;
		case "info":
			typeClass = styles.info;
			icon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="70%"
					viewBox="0 -960 960 960"
					fill="#fff"
				>
					<path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z" />
				</svg>
			);
			break;
		case "warning":
			typeClass = styles.warning;
			icon = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="60%"
					viewBox="0 -960 960 960"
					fill="#fff"
				>
					<path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
				</svg>
			);
			break;
	}

	useEffect(() => {
		if (toast.message && toast.type) {
			setTimeout(() => {
				dispatch(resetToast());
			}, 2000);
		}
	}, [toast, dispatch]);

	return (
		<div
			style={{
				position: "relative",
			}}
		>
			{children}
			{toast.message && (
				<div className={`${styles.toast}`}>
					<div className={`${styles.icon} ${typeClass}`}>{icon}</div>
					<p className={`${styles.message}`}>{message}</p>
				</div>
			)}
		</div>
	);
};

export default ToastWrapper;
