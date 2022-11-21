import CardLayout from '@/containers/CardLayout';
import React, { FC } from 'react';

interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
	return (
		<CardLayout>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
			<div className='w-[100px] h-[100px] bg-slate-600 justify-self-center'>
				Cards
			</div>
		</CardLayout>
	);
};
export default Cards;
