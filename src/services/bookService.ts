import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {collection,doc,getDoc,getDocs} from "firebase/firestore";

import { db } from '@/firebase';
import { FIX_ME } from '@/types/fixThisType';
import { firebaseAllBooksResponse } from '@/models/model';

export const bookAPI = createApi({
	reducerPath: 'bookAPI',
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		getAllBooks: builder.query<FIX_ME, FIX_ME>({
			async queryFn() {
				try {
          const blogRef = collection(db, 'books');
          const querySnaphot = await getDocs(blogRef);
          let books: firebaseAllBooksResponse[] = [];
          querySnaphot?.forEach((doc) => {
						// @ts-ignore !FIX_ME!
            books.push({ id: doc.id, ...doc.data() });
          });
          return { data: books };
        } catch (error) {
          return { error };
        }
			},
		}),
	}),
});

export const { useGetAllBooksQuery } = bookAPI;
