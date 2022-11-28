import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
	const { id, email, password } = useTypedSelector((state) => state.user.user);

	return {
		isAuth: !!password,
		id: id,
		email: email,
		password: password,
	};
};
