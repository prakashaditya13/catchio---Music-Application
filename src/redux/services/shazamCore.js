import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreAPi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3e830a5e6fmshd896424b06b7685p11436djsn197a66d18d77')
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')
            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () =>  '/charts/track'}),
        // getSongDetails: builder.query({query: ({songid}) => ``}),
        getSongRelated: builder.query({query: ({songid}) => `/songs/get-related-artist?id=${songid}`})
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;