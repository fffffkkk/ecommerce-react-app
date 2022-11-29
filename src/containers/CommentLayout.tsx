import React, { FC } from 'react';

interface CommentLayoutProps {
	children: React.ReactNode;
}

const CommentLayout: FC<CommentLayoutProps> = ({ children }) => {
	return <div className='w-full g-full flex flex-col gap-5'>{children}</div>;
};
export default CommentLayout;
