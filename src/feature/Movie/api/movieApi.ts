import {baseApi} from "@/app/api/baseApi.ts";
import type {
    BaseResponse,
    GenresResponse,
    MovieCredits,
    MovieDetails,
    MovieSimilarResponse,
    SearchQueryParams,
    SortBy
} from "@/common/types";
import {
    BaseResponseSchema,
    GenresResponseSchema,
    MovieCreditsSchema,
    MovieDetailsSchema,
    MovieSimilarResponseSchema
} from "@/feature/Movie/model/movie.schemas.ts";
import {zodCatch} from "@/common/utils";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryMovies: build.query<BaseResponse, { category: string, params?: { page: number } }>({
            query: ({category, params}) => ({
                method: 'GET',
                url: `movie/${category}`,
                params
            }),
            ...zodCatch(BaseResponseSchema)
        }),
        searchMovies: build.query<BaseResponse, SearchQueryParams>({
            query: (params) => {
                return {
                    method: 'GET',
                    url: 'search/movie',
                    params
                }
            },
            ...zodCatch(BaseResponseSchema)
        }),
        getDiscoverMovies: build.query<BaseResponse, {
            sort_by: SortBy,
            'vote_average.gte': number,
            'vote_average.lte': number,
            with_genres: string,
            page: number
        }>({
            query: (params) => {
                return {
                    method: 'GET',
                    url: 'discover/movie',
                    params
                }
            },
            ...zodCatch(BaseResponseSchema)
        }),
        getMoviesDetails: build.query<MovieDetails, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}`
            }),
            ...zodCatch(MovieDetailsSchema)
        }),
        getMoviesCredits: build.query<MovieCredits, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}/credits`
            }),
            ...zodCatch(MovieCreditsSchema)
        }),
        getMoviesSimilar: build.query<MovieSimilarResponse, number>({
            query: (id) => ({
                method: 'GET',
                url: `movie/${id}/similar`
            }),
            ...zodCatch(MovieSimilarResponseSchema)
        }),
        getMoviesGenre: build.query<GenresResponse, void>({
            query: () => 'genre/movie/list',
            ...zodCatch(GenresResponseSchema)
        }),
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