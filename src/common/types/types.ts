
import {z} from "zod";
import {
    BaseResponseSchema, GenresResponseSchema, MovieCreditsSchema, MovieDetailsSchema,
    type MovieSchema, MovieSimilarResponseSchema,
    SearchQueryParamsSchema,
    SortBySchema
} from "@/feature/Movie/model/movie.schemas.ts";

export type Favorite = Pick<Movie, 'vote_average' | 'title' | 'id'> & {
    poster_path: string | null
}

export const SORT_FIELDS = {
    POPULARITY: 'popularity',
    RELEASE_DATE: 'primary_release_date',
    TITLE: 'title',
    VOTE_AVERAGE: 'vote_average',
} as const;

export const SORT_ORDERS = {
    ASC: 'asc',
    DESC: 'desc',
} as const;

export type Movie = z.infer<typeof MovieSchema>;
export type BaseResponse = z.infer<typeof BaseResponseSchema>;
export type SearchQueryParams = z.infer<typeof SearchQueryParamsSchema>;
export type SortBy = z.infer<typeof SortBySchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;
export type MovieDetails = z.infer<typeof MovieDetailsSchema>;
export type MovieCredits = z.infer<typeof MovieCreditsSchema>;
export type MovieSimilarResponse = z.infer<typeof MovieSimilarResponseSchema>;