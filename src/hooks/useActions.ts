import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartAction } from '@/store/cart/cart.slice';
import { userAction } from '@/store/cart/user.slice';

const allActions = {
	...cartAction,
	...userAction,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
