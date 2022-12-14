import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { firebaseUserResponse } from '@/models/model';
import { FIX_ME } from '@/types/fixThisType';
import { IUser } from '@/models/IUser';

const USER_AUTH_KEY = 'uark';

interface UserState {
	user: firebaseUserResponse;
	toggleSaveUser: boolean;
}

const initialState: UserState = {
	user: JSON.parse(localStorage.getItem(USER_AUTH_KEY) ?? '{}'),
	toggleSaveUser: true,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<firebaseUserResponse>) {
			state.user.id = action.payload.id;
			state.user.email = action.payload.email;
			state.user.password = action.payload.password;
			state.user.imageURL = '';

			if (state.toggleSaveUser) {
				localStorage.setItem(USER_AUTH_KEY, JSON.stringify(state.user));
			}
		},
		removeUser(state) {
			state.user.id = '';
			state.user.email = '';
			state.user.password = '';
			state.user.imageURL = '';

			if (state.toggleSaveUser) {
				localStorage.setItem(USER_AUTH_KEY, JSON.stringify(state.user));
			}
		},
		changeSaveUser(state) {
			state.toggleSaveUser = !state.toggleSaveUser;
		},
		changeImagUser(state, action: PayloadAction<{ imageURL: string }>) {
			state.user.imageURL = action.payload.imageURL;
			localStorage.setItem(
				USER_AUTH_KEY,
				JSON.stringify({ imageURL: state.user.imageURL })
			);
		},
	},
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
