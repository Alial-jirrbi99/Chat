import React from "react";

export function useLocalStorage() {
	const storeData = (dataName, data, options) =>
		localStorage.setItem(dataName, JSON.stringify(data));
	const getData = (data) => JSON.parse(localStorage.getItem(data));
	const clearData = () => {
		localStorage.clear();
		window.location.reload();
	}
	return { storeData, getData, clearData };
}

export default useLocalStorage;
