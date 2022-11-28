import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
	return (
		<Routes>
			<Route path='/login' element={<SignIn />} />
			<Route path='/reg' element={<SignUp />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	);
};
export default AppRouter;
