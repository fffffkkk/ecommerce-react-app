import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {addDoc, collection,doc,getDoc,getDocs, serverTimestamp} from "firebase/firestore";

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
		addBook: builder.mutation({
			// @ts-ignore !FIX_ME!
			async queryFn(data: FIX_ME) {
				try {
					await addDoc(collection(db, 'books'), {
						...data, 
					})
				} catch (error) {
					return {error: error}
				}
			}
		})
	}),
});

export const { useGetAllBooksQuery, useAddBookMutation } = bookAPI;
