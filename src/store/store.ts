import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { bookAPI } from '@/services/bookService';
import { cartReducer } from './cart/cart.slice';

export const rootReducer = combineReducers({
	[bookAPI.reducerPath]: bookAPI.reducer,
	cart: cartReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bookAPI.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;
