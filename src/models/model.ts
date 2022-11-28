import { IBook } from './IBook';
import { IUser } from './IUser';

export interface firebaseAllBooksResponse extends IBook {
	id: string;
}
export interface firebaseUserResponse extends IUser {
	id: string;
}
