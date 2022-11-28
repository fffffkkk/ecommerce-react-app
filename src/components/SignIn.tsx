import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';
import { useActions } from '@/hooks/useActions';
import UserForm from './UI/UserForm';

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
	const navigate = useNavigate();
	const { addUser } = useActions();
	const handleSignIn = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				addUser({
					// @ts-ignore
					email: user.email,
					// @ts-ignore
					password: user.accessToken,
					id: user.uid,
				});
			})
			.catch((error) => console.log(error));
		navigate('/');
	};

	return (
		<UserForm
			title='Вы уже зарегистрированы?'
			text={'Вспомнить меня'}
			handleClick={handleSignIn}
		/>
	);
};

export default SignIn;
