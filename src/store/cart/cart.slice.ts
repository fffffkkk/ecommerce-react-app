import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { firebaseAllBooksResponse } from '@/models/model';

interface initialCartState {
	cart: firebaseAllBooksResponse[];
	total: number;
}

const initialState: initialCartState = { cart: [], total: 0 };

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<firebaseAllBooksResponse>) => {
			state.cart.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<{ id: string }>) => {
			state.cart = state.cart.filter((data) => data.id !== action.payload.id);
		},
		totalPrice: (state) => {
			let total = 0;
			console.log('this render totalPrice');
			state.cart.forEach((item) => {
				total += Number(item.price.split(' ')[0]);
			});
			state.total = total;
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
