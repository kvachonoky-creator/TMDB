import type {SortBy} from "@/common/types";

export type RatingRange = {
    min: number
    max: number
}

export type MovieFilters = {
    sortBy: SortBy
    genres: string[]
    rating: RatingRange
}
