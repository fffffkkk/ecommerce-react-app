import React, { FC } from 'react';

import { firebaseAllBooksResponse } from '@/models/model';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash-svgrepo-com.svg';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface CartItemProps {
	data: firebaseAllBooksResponse;
}

const CartItem: FC<CartItemProps> = ({ data }) => {
	const { removeItem } = useActions();
	const { cart } = useTypedSelector((state) => state);
	const handleRemove = () => {
		removeItem({ id: data.id });
		console.log(typeof cart[0].id);
		console.log('yes', cart);
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
				<TrashIcon
					className='cursor-pointer hover:fill-red-500 w-[40px] h-[40px]'
					onClick={handleRemove}
				/>
			</div>
		</div>
	);
};
export default CartItem;
