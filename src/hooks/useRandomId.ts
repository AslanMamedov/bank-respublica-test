import { useState } from 'react';

type useRandomId = [id: string, generateId: () => void];

const useRandomId = (): useRandomId => {
	const [id, setId] = useState(`id-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString()}`);
	const generateId = (): void => {
		setId(`id-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString()}`);
	};
	return [id, generateId];
};

export default useRandomId;
