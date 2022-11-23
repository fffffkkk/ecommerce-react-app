import React, { FC } from 'react';

interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = ({}) => {
	return (
		<button className='btn btn-square loading absolute bg-sky-400 border-none right-[50%] bottom-[50%]'></button>
	);
};
export default Spinner;
