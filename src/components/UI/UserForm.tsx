import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FIX_ME } from '@/types/fixThisType';

interface UserFormProps {
	title: 'Регистрация' | 'Вы уже зарегистрированы?';
	text: string;
	handleClick: (email: string, password: string) => void;
}

const UserForm: FC<UserFormProps> = ({ title, text, handleClick }) => {
	const navigate = useNavigate();
	const { toggleSaveUser } = useTypedSelector((state) => state.user);
	const { changeSaveUser } = useActions();
	const [userForm, setUserForm] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e: FIX_ME) => {
		setUserForm({ ...userForm, [e.target.name]: e.target.value });
	};

	return (
		<div className='h-screen flex items-center justify-center flex-col gap-5'>
			<h1 className='font-bold text-2xl text-sky-500'>{title}</h1>
			<label className='flex flex-col'>
				Введите почту:
				<input
					type='email'
					className='input w-full max-w-xs bg-sky-300'
					name='email'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label className='flex flex-col'>
				Введите пароль:
				<input
					type='password'
					className='input w-full max-w-xs bg-sky-300'
					name='password'
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<div className='flex flex-col'>
				<div className='form-control w-52'>
					<label className='cursor-pointer label'>
						<span className='label-text'>Запомнить меня</span>
						<input
							type='checkbox'
							className='toggle toggle-info'
							checked={toggleSaveUser ? true : false}
							onChange={() => changeSaveUser()}
						/>
					</label>
				</div>
			</div>
			{title === 'Регистрация' ? (
				<p
					className='font-bold label-text cursor-pointer'
					onClick={() => navigate('/login')}
				>
					Уже авторизованы?
				</p>
			) : (
				<p
					className='font-bold label-text cursor-pointer'
					onClick={() => navigate('/reg')}
				>
					Еще не авторизованы?
				</p>
			)}
			<button
				className='btn btn-primary mt-5 bg-sky-400 border-none hover:bg-sky-500 active:bg-sky-500'
				onClick={() => handleClick(userForm.email, userForm.password)}
			>
				{text}
			</button>
		</div>
	);
};
export default UserForm;
