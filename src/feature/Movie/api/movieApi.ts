import {baseApi} from "@/app/api/baseApi.ts";
import type {
    BaseResponse,
    GenresResponse,
    MovieCredits, MovieDetails, MovieSimilarResponse,
    SearchQueryParams,
    SortBy
} from "@/feature/Movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryMovies: build.query<BaseResponse, string>({
            query: (category) => `movie/${category}`
        }),
        searchMovies: build.query<BaseResponse, SearchQueryParams>({
            query: (params) => ({
                method: 'GET',
                url: 'search/movie',
                params
            })
        }),
        getDiscoverMovies: build.query<BaseResponse, {
            sort_by: SortBy,
            'vote_average.gte': number,
            'vote_average.lte': number,
            with_genres: string
        }>({
            query: (params) => {
                return {
                    method: 'GET',
                    url: 'discover/movie',
                    params
                }
            }
        }),
        getMoviesDetails: build.query<MovieDetails, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}`
            })
        }),
        getMoviesCredits: build.query<MovieCredits, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}/credits`
            })
        }),
        getMoviesSimilar: build.query<MovieSimilarResponse, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}/similar`
            })
        }),
        getMoviesGenre: build.query<GenresResponse, void>({
            query: () => 'genre/movie/list',
        })
    })
})

export const {
    useSearchMoviesQuery,
    useGetCategoryMoviesQuery,
    useGetDiscoverMoviesQuery,
    useGetMoviesGenreQuery,
    useGetMoviesDetailsQuery,
    useGetMoviesCreditsQuery,
    useGetMoviesSimilarQuery,
} = movieApi