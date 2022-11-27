import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import CartItem from './CartItem';

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
	const { cart } = useTypedSelector((state) => state);

	return (
		<div>
			{cart.map((data) => (
				<CartItem key={data.id} data={data} />
			))}
		</div>
	);
};
export default Cart;
