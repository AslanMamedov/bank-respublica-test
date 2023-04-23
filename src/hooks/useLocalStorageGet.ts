import { useState, useEffect } from 'react';

export const useLocalStorageGet = <T>(key: string): T | null => {
	const [value, setValue] = useState<T | null>(null);

	useEffect(() => {
		const storedValue = localStorage.getItem(key);
		if (storedValue !== null) {
			setValue(JSON.parse(storedValue) as T);
		}
	}, [key]);

	return value;
};
