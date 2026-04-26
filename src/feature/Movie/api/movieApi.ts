import {baseApi} from "@/app/api/baseApi.ts";
import type {BaseResponse, SearchQueryParams} from "@/feature/Movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryMovies: build.query<BaseResponse, string>({
            query: (category) => `movie/${category}`
        }),
        searchMovie: build.query<BaseResponse, SearchQueryParams>({
            query: (params) => {
                return {
                    method: 'GET',
                    url: 'search/movie',
                    params
                }
            }
        })
    })
})

export const {
    useSearchMovieQuery,
    useGetCategoryMoviesQuery
} = movieApi