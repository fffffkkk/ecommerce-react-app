import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
	return (
		<Routes>
			<Route path='/profile-user/:userID' element={<Profile />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/login' element={<SignIn />} />
			<Route path='/reg' element={<SignUp />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	);
};
export default AppRouter;
