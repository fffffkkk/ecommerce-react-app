import React, { FC, useEffect, useState } from 'react';

import { useGetAllBooksQuery } from '@/services/bookService';
import { firebaseAllBooksResponse } from '@/models/model';
import Spinner from './Spinner';
import CardItem from './CardItem';
import CardLayout from '@/containers/CardLayout';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
	const [search, setSearch] = useState('');
	const [data, setData] = useState<firebaseAllBooksResponse[]>();
	// @ts-ignore
	const { isLoading, data: books } = useGetAllBooksQuery();
	const handleSearch = () => {
		if (books) {
			setData(
				books.filter((book: firebaseAllBooksResponse) =>
					book.title.toLowerCase().includes(search.toLowerCase())
				)
			);
		}
	};

	useEffect(() => {
		handleSearch();
	}, [search]);

	if (isLoading) return <Spinner />;

	return (
		<div className='flex flex-col items-center mt-10'>
			<input
				type='search'
				className='input w-full max-w-xs bg-sky-300'
				onChange={(e) => setSearch(e.target.value)}
			/>
			{data && <CardLayout>{data.map((item) => <CardItem data={item} key={item.id}/>)}</CardLayout>}
		</div>
	);
};
export default Search;
