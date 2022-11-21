import React, { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from './firebase';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
	useEffect(() => {
		const getAllData = async () => {
			await getDocs(collection(db, 'books')).then((item) =>
				item.docs.map((doc) => console.log(doc.data()))
			);
		};
		getAllData();
	}, []);

	return <div>123</div>;
};
export default App;
