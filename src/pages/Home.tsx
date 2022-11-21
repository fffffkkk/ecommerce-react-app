import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import MainLayout from '@/containers/MainLayout';
import Search from '@/components/Search';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<MainLayout>
			<Navbar />
			<Routes>
				<Route path='/search' element={<Search />} />
			</Routes>
		</MainLayout>
	);
};
export default Home;
