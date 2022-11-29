import React, { FC } from 'react';

import { IComment } from '@/models/IComment';

interface CommentItemProps {
	comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
	return (
		<div className='mt-10'>
			<div className='flex gap-5'>
				<img
					className='w-[50px] h-[50px] rounded-full'
					src={comment.author.imageURL}
					alt='img-user'
				/>
				<div className=''>
					<div className='font-bold text-red-500'>{comment.author.name}</div>
					<div className=''>{comment.text}</div>
				</div>
			</div>
		</div>
	);
};
export default CommentItem;
