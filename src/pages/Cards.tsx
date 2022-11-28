import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from '@/components/Cart';
import Search from '@/components/Search';
import Card from '@/components/Card';
import CardDetail from '@/components/CardDetail';
import BookForm from '@/components/UI/BookForm';
import Profile from '@/components/Profile';
import Settings from '@/pages/Settings';

interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
	return (
		<Routes>
			<Route path='/search' element={<Search />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/create-book' element={<BookForm />} />
			<Route path='/card-detail/:cardDetailID' element={<CardDetail />} />
			<Route path='/profile-user/:userID' element={<Profile />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='*' element={<Card />} />
		</Routes>
	);
};
export default Cards;
