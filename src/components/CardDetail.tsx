import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetBookByIDQuery } from '@/services/bookService';

interface CardDetailProps {}

const CardDetail: FC<CardDetailProps> = ({}) => {
	const { cardDetailID } = useParams();
	const { data } = useGetBookByIDQuery(cardDetailID);

	console.log(data);
	return (
		<div className='mt-10 flex gap-20'>
			<div className='gap-10'>
				<img
					className='w-[250px] h-[250px] rounded-full'
					src={data.imageURL}
					alt='img-url'
				/>
				<div className='mt-5'>
					<h1 className='font-bold text-2xl'>Информация</h1>
					<h2 className='font-bold text-xl'>{data.title}</h2>
					<p className='font-bold text-lg'>{data.about}</p>
					<p className='font-bold text-red-500'>{data.price} руб.</p>
					<p className='font-bold'>Автор: {data.author}</p>
					<p>{data.release} г.</p>
				</div>
			</div>
			<div className=''>
				<h1 className='font-bold text-2xl'>Комментарии</h1>
			</div>
		</div>
	);
};
export default CardDetail;
