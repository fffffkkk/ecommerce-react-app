import React, { FC } from 'react';

import { useGetAllBooksQuery } from '@/services/bookService';
import { firebaseAllBooksResponse } from '@/models/model';
import CardLayout from '@/containers/CardLayout';
import Spinner from './Spinner';
import CardItem from './CardItem';

interface CardsProps {}

const Card: FC<CardsProps> = ({}) => {
	const { isLoading, data } = useGetAllBooksQuery();

	if (isLoading) return <Spinner />;
	console.log(data);

	return (
		<CardLayout>
			{data.map((item: firebaseAllBooksResponse) => (
				<CardItem key={item.id} data={item} />
			))}
			<CardItem key={data[0].id} data={data[0]} />
			<CardItem key={data[0].id} data={data[0]} />
			<CardItem key={data[0].id} data={data[0]} />
			<CardItem key={data[0].id} data={data[0]} />
		</CardLayout>
	);
};
export default Card;
