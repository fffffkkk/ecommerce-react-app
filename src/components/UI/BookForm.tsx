import React, { FC, useState, useEffect } from 'react';

import { FIX_ME } from '@/types/fixThisType';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebase';
import Select from './Select';
import { useAddBookMutation } from '@/services/bookService';
import { useNavigate } from 'react-router-dom';

interface BookFormProps {}

const BookForm: FC<BookFormProps> = ({}) => {
	const [file, setFile] = useState();
	const [formData, setFormData] = useState({
		title: '',
		about: '',
		article: Date.now(),
		imageURL: '',
		author: '',
		topics: [''],
		release: '2022',
		price: '',
	});
	const [addBook] = useAddBookMutation();
	const navigate = useNavigate();

	const handleChange = (e: FIX_ME) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async () => {
		if (!formData.imageURL || (Number(formData.price) <= 1 && Number(formData.price) >= 5000)) {
			alert('enter price [1; 5000]')
			return
		}
		if (formData.price.match(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/)) {
			await addBook(formData);
			navigate('/');
		} else {
			alert('enter valid price');
		}
	};

	useEffect(() => {
		const uploadFile = () => {
			// @ts-ignore
			const storageRef = ref(storage, file.name);
			const uploadTask = uploadBytesResumable(storageRef, file!);

			uploadTask.on(
				'state_changed',
				(snapshot) => {},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setFormData({ ...formData, imageURL: downloadURL });
					});
				}
			);
		};

		file && uploadFile();
	}, [file]);

	return (
		<div className='flex flex-col items-center justify-center mt-10 gap-2'>
			<label className='flex flex-col'>
				Заголовок:
				<input
					type='text'
					className='input w-full max-w-xs bg-sky-300'
					name='title'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label className='flex flex-col'>
				Описание:
				<input
					type='text'
					className='input w-full max-w-xs bg-sky-300'
					name='about'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label className='flex flex-col'>
				Цена:
				<input
					type='text'
					className='input w-full max-w-xs bg-sky-300'
					name='price'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label className='flex flex-col'>
				Автор:
				<input
					type='text'
					className='input w-full max-w-xs bg-sky-300'
					name='author'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label>
				<Select name='topics' change={handleChange} />
			</label>
			<label className='flex flex-col text-center mt-2'>
				Загрузите обложку:
				<input
					type='file'
					accept='image/*'
					onChange={(e: FIX_ME) => setFile(e.target.files[0])}
					className='file-input w-full max-w-xs bg-sky-300'
				/>
			</label>
			<button
				onClick={handleSubmit}
				className='btn btn-primary mt-5 bg-sky-400 border-none hover:bg-sky-500 active:bg-sky-500'
			>
				Создать
			</button>
		</div>
	);
};
export default BookForm;
