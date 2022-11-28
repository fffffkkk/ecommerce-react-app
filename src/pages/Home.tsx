import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import MainLayout from '@/containers/MainLayout';
import Navbar from '@/components/Navbar';
import Cards from './Cards';
import SignUp from '@/components/SignUp';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	const { isAuth } = useAuth();

	console.log(isAuth);

	return isAuth ? (
		<MainLayout>
			<Navbar />
			<Cards />
		</MainLayout>
	) : (
		<SignUp />
	);
};
export default Home;
