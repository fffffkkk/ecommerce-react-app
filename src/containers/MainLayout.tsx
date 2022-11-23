import React, { FC } from 'react';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <div className='w-screen max-w-[1400px] mx-auto mt-2'>{children}</div>;
};
export default MainLayout;
