import {baseApi} from "@/app/api/baseApi.ts";
import type {BaseResponse, ResponseBody, SearchQueryParams, SortBy} from "@/feature/Movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryMovies: build.query<BaseResponse, string>({
            query: (category) => `movie/${category}`
        }),
        searchMovie: build.query<BaseResponse, SearchQueryParams>({
            query: (params) => ({
                method: 'GET',
                url: 'search/movie',
                params
            })
        }),
        getDiscoverMovies: build.query<BaseResponse, { sort: SortBy }>({
            query: (params) => ({
                method: 'GET',
                url: 'discover/movie',
                params
            })
        }),
        getMovieDetails: build.query<ResponseBody, number>({
            query: (id) => ({
                method: 'GET',
                url: `credit/${id}`
            })
        })
    })
})

export const {
    useSearchMovieQuery,
    useGetCategoryMoviesQuery,
    useGetDiscoverMoviesQuery,
    useLazyGetDiscoverMoviesQuery,
    useGetMovieDetailsQuery
} = movieApi