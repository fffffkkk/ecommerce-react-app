import React, { FC, useState } from 'react';

import { topics } from '@/utils/topics';
import { FIX_ME } from '@/types/fixThisType';

interface SelectProps {
	change: (e: FIX_ME) => void;
	name: string;
}

const Select: FC<SelectProps> = ({ change, name }) => {
	return (
		<select
			className='select w-[215px] mt-3 border-none bg-sky-300'
			name={name}
			onChange={(e: FIX_ME) => change(e)}
		>
			<option disabled selected>
				Выберите категорию:
			</option>
			{topics.map((topic) => (
				<option value={topic} key={topic} className='font-bold'>
					{topic}
				</option>
			))}
		</select>
	);
};
export default Select;
