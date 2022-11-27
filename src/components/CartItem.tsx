import React, { FC } from 'react';

import { firebaseAllBooksResponse } from '@/models/model';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash-svgrepo-com.svg';
import { useActions } from '@/hooks/useActions';

interface CartItemProps {
	data: firebaseAllBooksResponse;
}

const CartItem: FC<CartItemProps> = ({ data }) => {
	const { removeItem, totalPrice } = useActions();
	const handleRemoveItem = () => {
		removeItem({ id: data.id });
		totalPrice();
	};

	return (
		<div className='alert alert-success shadow-lg mt-5 bg-sky-400'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex items-center'>
					<img
						className='w-[60px] h-[60px] rounded-full mr-2'
						src={data.imageURL}
						alt='img-screen'
					/>
					<div>
						<h1 className='block font-bold text-xl'>{data.title}</h1>
						<p className='block'>{data.price} RUB.</p>
					</div>
				</div>
				<button onClick={handleRemoveItem}>
					<TrashIcon className='cursor-pointer hover:fill-red-500 w-[40px] h-[40px]' />
				</button>
			</div>
		</div>
	);
};
export default CartItem;
