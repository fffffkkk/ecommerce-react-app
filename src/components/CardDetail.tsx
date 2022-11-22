import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface CardDetailProps {}

const CardDetail: FC<CardDetailProps> = ({}) => {
	const { cardDetailID } = useParams();
	return (
		<div>
			<div>{cardDetailID}</div>
		</div>
	);
};
export default CardDetail;
