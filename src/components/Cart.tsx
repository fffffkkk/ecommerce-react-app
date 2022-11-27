import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import CartItem from './CartItem';
import { useActions } from '@/hooks/useActions';

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
	const { cart, total } = useTypedSelector((state) => state.cart);

	console.log(total);

	return (
		<div>
			{cart.map((data) => (
				<CartItem key={data.id} data={data} />
			))}
			<div className='font-bold text-sky-400'>
				<h2 className='text-center mt-10'>Общая сумма: {total} руб.</h2>
			</div>
		</div>
	);
};
export default Cart;
