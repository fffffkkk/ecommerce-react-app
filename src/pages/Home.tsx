import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '@/containers/MainLayout';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Cart from '@/components/Cart';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	return (
		<MainLayout>
			<Navbar />
			<Routes>
				<Route path='/search' element={<Search />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</MainLayout>
	);
};
export default Home;
