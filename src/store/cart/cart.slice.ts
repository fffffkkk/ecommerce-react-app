import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { firebaseAllBooksResponse } from '@/models/model';

const initialState: firebaseAllBooksResponse[] = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<firebaseAllBooksResponse>) => {
			state.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<{ id: string }>) => {
			return state.filter((data) => data.id !== action.payload.id);
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
