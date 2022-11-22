import { IParameters } from './IParameters';

export interface IBook {
	title: string;
	about: string;
	article: number;
	parameters: IParameters;
	release: string;
}
