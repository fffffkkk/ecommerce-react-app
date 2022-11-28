import React, { FC, useEffect, useState } from 'react';

import { useGetAllBooksQuery } from '@/services/bookService';
import CardItem from './CardItem';
import { FIX_ME } from '@/types/fixThisType';
import Spinner from './Spinner';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
	const [text, setText] = useState('');
	const [data, setData] = useState([]);
	// @ts-ignore
	const { isLoading, data: books } = useGetAllBooksQuery();
	const handleSearch = () => {
		if (books) {
			setData(
				books.filter((book: FIX_ME) =>
					book.title.toLowerCase().includes(text.toLowerCase())
				)
			);
		}
	};

	useEffect(() => {
		handleSearch();
	}, [text]);

	if (isLoading) return <Spinner />;

	return (
		<div>
			<input
				type='text'
				className='input w-full max-w-xs bg-sky-300'
				onChange={(e) => setText(e.target.value)}
			/>
			{data && data.map((item) => <h1 key={item.id}>{item.title}</h1>)}
		</div>
	);
};
export default Search;
