import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { bookAPI } from '@/services/bookService';

export const rootReducer = combineReducers({
	[bookAPI.reducerPath]: bookAPI.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bookAPI.middleware),
});

setupListeners(store.dispatch);
