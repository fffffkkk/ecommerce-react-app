import React, { FC, useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from '@/firebase';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { FIX_ME } from '@/types/fixThisType';

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
	const [file, setFile] = useState();
	const { user } = useTypedSelector((state) => state.user);
	const { changeImagUser } = useActions();

	useEffect(() => {
		const uploadFile = () => {
			const storageRef = ref(storage, user.id);
			const uploadTask = uploadBytesResumable(storageRef, file!);
			uploadTask.on(
				'state_changed',
				(snapshot) => {},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						changeImagUser({ imageURL: downloadURL });
					});
				}
			);
		};

		file && uploadFile();
	}, [file]);

	return (
		<div className='p-5 flex items-center gap-5'>
			<div>
				{user.imageURL ? (
					<img
						src={user.imageURL}
						alt='user-img'
						className='w-[250px] h-[250px] rounded-full'
					/>
				) : (
					<div className='w-[250px]'>
						<div className='w-full h-[250px] rounded-full bg-slate-500'></div>
						<input
							type='file'
							accept='image/*'
							onChange={(e: FIX_ME) => setFile(e.target.files[0])}
							className='file-input w-full max-w-xs bg-sky-300 mt-5'
						/>
					</div>
				)}
			</div>
			<div className=''>
				<h1>Почта: {user.email}</h1>
			</div>
		</div>
	);
};
export default Profile;
