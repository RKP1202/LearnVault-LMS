import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userLoggedIn } from '../authSlice';

const USER_API = "http://localhost:3099/api/v1/user/"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: USER_API,
            credentials: "include"
        }),

    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (formData) => ({
                url: "register",
                method: "POST",
                body: formData
            })
        }),
        loginUser: builder.mutation({
            query: (formData) => ({
                url: "login",
                method: "POST",
                body: formData
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({ user: result.data.user }));
                } catch (error) {
                    console.log(error);
                }
            }
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation
} = authApi