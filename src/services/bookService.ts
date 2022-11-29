import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore";

import { db } from '@/firebase';
import { FIX_ME } from '@/types/fixThisType';
import { firebaseAllBooksResponse } from '@/models/model';

export const bookAPI = createApi({
	reducerPath: 'bookAPI',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['Books'],
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
			providesTags: ['Books']
		}),
		getBookByID: builder.query<FIX_ME, FIX_ME>({
			async queryFn(id: string) {
				try {
          const docRef = doc(db, "books", id);
					const docSnap = await getDoc(docRef);
          
          return {data: docSnap.data()}
        } catch (error) {
          return { error };
        }
			},
			providesTags: ['Books']
		}),
		addBook: builder.mutation({
			// @ts-ignore !FIX_ME!
			async queryFn(data: FIX_ME) {
				try {
					await addDoc(collection(db, 'books'), {
						...data, 
					})
					return {data: 'ok'}
				} catch (error) {
					return {error: error}
				}
			},
			invalidatesTags: ['Books'],
		})
	}),
});

export const { useGetAllBooksQuery, useAddBookMutation, useGetBookByIDQuery } = bookAPI;
