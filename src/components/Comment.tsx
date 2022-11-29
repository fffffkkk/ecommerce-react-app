import React, { FC, useEffect, useState } from 'react';
import {
	arrayUnion,
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
} from 'firebase/firestore';

import { IBook } from '@/models/IBook';
import { db } from '@/firebase';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FIX_ME } from '@/types/fixThisType';
import CommentLayout from '@/containers/CommentLayout';
import CommentItem from './CommentItem';
import { IComment } from '@/models/IComment';

interface CommentProps {
	data: IComment[];
	id: string;
}

const Comment: FC<CommentProps> = ({ data, id }) => {
	const [comment, setComment] = useState('');
	const { user } = useTypedSelector((state) => state.user);

	const handleSubmit = async (e: FIX_ME) => {
		e.preventDefault();
		await updateDoc(doc(db, 'books', id), {
			comments: arrayUnion({
				author: { imageURL: user.imageURL, name: user.email },
				text: comment,
			}),
		});

		setComment('');
	};

	return (
		<div className='w-full'>
			<form onClick={handleSubmit} className='flex'>
				<input
					type='text'
					className='input w-full max-w-xs bg-slate-100'
					placeholder='написать...'
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button className='btn btn-primary bg-sky-400 hover:bg-sky-500 active:bg-sky-500 border-none'>
					Написать
				</button>
			</form>
			<CommentLayout>
				{data.map((comment, i) => (
					<div key={i}>
						{comment.text !== '' && <CommentItem comment={comment} />}
					</div>
				))}
			</CommentLayout>
		</div>
	);
};
export default Comment;
