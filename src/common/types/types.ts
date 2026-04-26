import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";

export type Favorite = Pick<Movie, 'vote_average' | 'title' | 'id' | 'poster_path'>
