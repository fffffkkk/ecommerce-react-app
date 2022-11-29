import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetBookByIDQuery } from '@/services/bookService';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
import Spinner from './Spinner';
import Comment from './Comment';
import { IComment } from '@/models/IComment';

interface CardDetailProps {}

const CardDetail: FC<CardDetailProps> = ({}) => {
	const { cardDetailID } = useParams();
	const [comments, setComments] = useState<IComment[]>();
	const { data } = useGetBookByIDQuery(cardDetailID);

	useEffect(() => {
		const unSub = onSnapshot(doc(db, `books/${cardDetailID}`), (doc) => {
			doc.exists() && setComments(doc.data().comments);
		});
		return () => {
			unSub();
		};
	}, []);

	return data && cardDetailID ? (
		<div className='mt-10 flex gap-20 w-full'>
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
			<div className='w-full'>
				<h1 className='font-bold text-2xl'>Комментарии</h1>
				{comments ? (
					<Comment data={comments} id={cardDetailID} />
				) : (
					<h1 className='font-bold text-red-500'>Пока нет комментариев</h1>
				)}
			</div>
		</div>
	) : (
		<Spinner />
	);
};
export default CardDetail;
