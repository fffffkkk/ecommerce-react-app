import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { firebaseAllBooksResponse } from '@/models/model';
import { FIX_ME } from '@/types/fixThisType';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface CardItemProps {
	data: firebaseAllBooksResponse;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
	const navigate = useNavigate();
	const { addItem } = useActions();
	const { cart } = useTypedSelector((state) => state);

	const isExistsInCart = cart.some((p) => p.id === data.id);

	const handleClickBuy = (e: FIX_ME) => {
		e.stopPropagation();
		if (!isExistsInCart) {
			addItem(data);
		}
	};

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
				<p className='break-words'>
					{data.about.slice(0, 100)}
					<span className='font-bold'>...</span>
				</p>
				<p>{data.price} RUB.</p>
				<p>Жанр: {data.topics}</p>
				<p>Дата выпуска: {data.release}</p>
				<div className='card-actions justify-end'>
					<button
						onClick={handleClickBuy}
						className='btn btn-primary bg-sky-400 active:bg-sky-500 hover:bg-sky-500 border-none'
					>
						{isExistsInCart ? 'Already in cart' : 'Buy Now'}
					</button>
				</div>
			</div>
		</div>
	);
};
export default CardItem;
