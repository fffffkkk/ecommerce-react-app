interface IAuthor {
	imageURL: string;
	name: string;
}
export interface IComment {
	author: IAuthor;
	text: string;
}
