import React, { FC } from 'react';

import { useGetAllBooksQuery } from '@/services/bookService';
import { firebaseAllBooksResponse } from '@/models/model';
import CardLayout from '@/containers/CardLayout';
import Spinner from './Spinner';
import CardItem from './CardItem';

interface CardsProps {}

const Card: FC<CardsProps> = ({}) => {
	// @ts-ignore
	const { isLoading, data } = useGetAllBooksQuery();

	if (isLoading) return <Spinner />;

	return (
		<CardLayout>
			{data.map((item: firebaseAllBooksResponse) => (
				<CardItem key={item.id} data={item} />
			))}
		</CardLayout>
	);
};
export default Card;
