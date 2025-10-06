export const formatDate = (isoDate: string): string => {
	const date = new Date(isoDate);

	const year = date.getFullYear();

	// Month names
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const month = monthNames[date.getMonth()];

	// Day with leading zero
	const day = String(date.getDate()).padStart(2, "0");

	// Hours in 12-hour format
	let hours = date.getHours();
	const ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12 || 12; // convert 0 to 12

	// Minutes with leading zero
	const minutes = String(date.getMinutes()).padStart(2, "0");

	return `${year}, ${month} ${day}, ${hours}:${minutes} ${ampm}`;
};

export const formatDateWithOutTime = (isoDate: string): string => {
	const date = new Date(isoDate);

	const year = date.getFullYear();

	// Month names
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const month = monthNames[date.getMonth()];

	// Day with leading zero
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}, ${month} ${day}`;
};
