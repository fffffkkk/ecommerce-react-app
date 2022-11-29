import React, { FC } from 'react';

interface CommentLayoutProps {
	children: React.ReactNode;
}

const CommentLayout: FC<CommentLayoutProps> = ({ children }) => {
	return (
		<div className='w-full g-full flex flex-col gap-2 overflow-y-scroll h-[500px]'>
			{children}
		</div>
	);
};
export default CommentLayout;
