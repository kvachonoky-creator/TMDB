import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";

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