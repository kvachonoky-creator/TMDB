import {baseApi} from "@/app/api/baseApi.ts";
import type {BaseResponse} from "@/feature/Movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<BaseResponse, void>({
            query: () => 'movie/popular'
        }),
        getTopRatedMovies: build.query<BaseResponse, void>({
            query: () => 'movie/top_rated'
        }),
        getUpcomingMovies: build.query<BaseResponse, void>({
            query: () => 'movie/upcoming'
        }),
        getNowPlayingMovies: build.query<BaseResponse, void>({
            query: () => 'movie/now_playing'
        })
    })
})

export const {useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery} = movieApi