import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { firebaseAllBooksResponse } from '@/models/model';

interface CardItemProps {
	data: firebaseAllBooksResponse;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div
			className='card w-96 bg-base-100 shadow-xl flex mx-auto cursor-pointer'
			onClick={() => navigate(`/card-detail/${data.id}`)}
		>
			<figure>
				<img src={data.imageURL} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{data.title}</h2>
				<p>
					{data.about.slice(0, 98)}
					<span className='font-bold'>...</span>
				</p>
				<p>Дата выпуска: {data.release}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary bg-sky-400 active:bg-sky-500 hover:bg-sky-500 border-none'>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};
export default CardItem;
