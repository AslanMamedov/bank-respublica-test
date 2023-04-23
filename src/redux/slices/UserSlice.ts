import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../../types';

const initialState: UserSchema = {
	cod: '',
	fin: '',
	date: '',
	name: '',
	seria: '',
	phone: '',
	surname: '',
	address: '',
	homenumber: '',
	middlename: '',
	registartion: '',
	passportnumber: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, actions: PayloadAction<UserSchema>) => {
			state = actions.payload;
			return {
				state,
				...actions.payload,
			};
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
