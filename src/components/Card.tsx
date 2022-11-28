import React, { FC } from 'react';

import { useGetAllBooksQuery } from '@/services/bookService';
import { firebaseAllBooksResponse } from '@/models/model';
import CardLayout from '@/containers/CardLayout';
import Spinner from './Spinner';
import CardItem from './CardItem';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface CardsProps {}

const Card: FC<CardsProps> = ({}) => {
	// @ts-ignore
	const { isLoading, data } = useGetAllBooksQuery();
	const { user } = useTypedSelector((state) => state);

	if (isLoading) return <Spinner />;

	console.log(user);
	return (
		<CardLayout>
			{data.map((item: firebaseAllBooksResponse) => (
				<CardItem key={item.id} data={item} />
			))}
		</CardLayout>
	);
};
export default Card;
