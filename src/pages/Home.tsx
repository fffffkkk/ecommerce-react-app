import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '@/containers/MainLayout';
import Navbar from '@/components/Navbar';
import Cards from './Cards';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<MainLayout>
			<Navbar />
			<Cards />
		</MainLayout>
	);
};
export default Home;
