import { useState } from 'react';

interface IUseLocalStorage<T> {
	value: T | null;
	setLocalStorageValue: (value: T) => void;
	removeLocalStorageValue: () => void;
}

export const useLocalStorageSet = <T>(key: string): IUseLocalStorage<T> => {
	const [value, setValue] = useState<T | null>(null);

	const setLocalStorageValue = (newValue: T) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setValue(newValue);
	};

	const removeLocalStorageValue = () => {
		localStorage.removeItem(key);
		setValue(null);
	};

	return { value, setLocalStorageValue, removeLocalStorageValue };
};
