import React, { FC, useState, useEffect } from 'react';

import { FIX_ME } from '@/types/fixThisType';
import { IBook } from '@/models/IBook';
import { Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebase';
import { log } from 'console';

interface BookFormProps {}

const BookForm: FC<BookFormProps> = ({}) => {
	const [file, setFile] = useState();
	const [formData, setFormData] = useState({
		title: '',
		about: '',
		article: Date.now(),
		imageURL: '',
		parameters: {
			author: 'Some Author',
			chapter: [''],
		},
		release: '2022',
	});

	const handleChange = (e: FIX_ME) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {};

	useEffect(() => {
		const uploadFile = () => {
			if (!file || !formData.title || !formData.about) {
				console.log('123');
				return;
			}
			// @ts-ignore
			const storageRef = ref(storage, file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

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

		uploadFile();
	}, [file]);

	console.log(formData);

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
