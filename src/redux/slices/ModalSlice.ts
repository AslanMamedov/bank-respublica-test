import { createSlice } from '@reduxjs/toolkit';
import { Modal } from '../../types';

const initialState: Modal = {
	open: false,
	guarantorIsOpen: false,
	creditIsOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		handleClickOpen: (state) => {
			state.open = true;
		},

		handleClose: (state) => {
			state.open = false;
		},
		handleClickOpenGuarantor: (state) => {
			state.guarantorIsOpen = true;
		},

		handleCloseGuarantor: (state) => {
			state.guarantorIsOpen = false;
		},

		handlerClicOpenDelete: (state) => {
			state.creditIsOpen = true;
		},
		handlerCloseDelete: (state) => {
			state.creditIsOpen = false;
		},
	},
});

export const {
	handleClose,
	handleClickOpen,
	handlerCloseDelete,
	handleCloseGuarantor,
	handlerClicOpenDelete,
	handleClickOpenGuarantor,
} = modalSlice.actions;

export default modalSlice.reducer;
