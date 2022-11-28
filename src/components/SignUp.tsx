import React, { FC } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';
import UserForm from './UI/UserForm';
import { useActions } from '@/hooks/useActions';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
	const { addUser } = useActions();
	const handleSignUp = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
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
	};

	return (
		<UserForm
			title='Регистрация'
			text={'Зарегистрироваться'}
			handleClick={handleSignUp}
		/>
	);
};

export default SignUp;
