import { useState, useEffect } from "react";

type Breakpoints = {
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
};

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
};

export function useScreenWidth(): Breakpoints {
	const getValues = () => {
		const width = window.innerWidth;
		return {
			sm: width >= breakpoints.sm,
			md: width >= breakpoints.md,
			lg: width >= breakpoints.lg,
			xl: width >= breakpoints.xl,
		};
	};

	const [values, setValues] = useState<Breakpoints>(getValues);

	useEffect(() => {
		const handleResize = () => setValues(getValues());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return values;
}
