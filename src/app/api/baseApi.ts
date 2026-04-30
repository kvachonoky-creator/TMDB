import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: async (args, api, extraOptions) => {

        await new Promise(res => setTimeout(res,2000))

      return fetchBaseQuery({
          baseUrl: `https://api.themoviedb.org/3/`,
          prepareHeaders: (headers) => {
              headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
          }
      })(args, api, extraOptions)
    },
    endpoints: () => ({}),
})