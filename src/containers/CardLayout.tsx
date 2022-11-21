import React, { FC } from 'react';

interface CardLayoutProps {
	children: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = ({ children }) => {
	return (
		<div className='grid grid-cols-2 gap-5 content-center items-center mt-5 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
			{children}
		</div>
	);
};
export default CardLayout;
