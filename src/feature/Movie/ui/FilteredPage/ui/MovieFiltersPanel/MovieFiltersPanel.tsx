import type {GenresResponse, SortBy} from "@/common/types";
import type {MovieFilters, RatingRange} from "@/feature/Movie/ui/FilteredPage/model/types.ts";
import s from './MovieFiltersPanel.module.css'
import {SortSelect} from "@/feature/Movie/ui/FilteredPage/ui/MovieFiltersPanel/SortSelect/SortSelect.tsx";
import {
    DoubleRangeSlider
} from "@/feature/Movie/ui/FilteredPage/ui/MovieFiltersPanel/DoubleRangeSlide/DoubleRangeSlider.tsx";
import {GenreFilter} from "@/feature/Movie/ui/FilteredPage/ui/MovieFiltersPanel/GenreFilter/GenreFilter.tsx";

type Props = {
    filters: MovieFilters
    genres?: GenresResponse['genres']
    ratingMin: number
    ratingMax: number
    ratingResetKey: number
    onSortChange: (sortBy: SortBy) => void
    onRatingChange: (rating: RatingRange) => void
    onGenreToggle: (genreId: string) => void
    onReset: () => void
}

export const MovieFiltersPanel = ({
    filters,
    genres,
    ratingMin,
    ratingMax,
    ratingResetKey,
    onSortChange,
    onRatingChange,
    onGenreToggle,
    onReset,
}: Props) => {
    return (
        <aside className={s.filterContainer}>
            <h3 className={s.title}>Filters / Sort</h3>
            <div className={s.form}>
                <SortSelect value={filters.sortBy} onChange={onSortChange}/>
                <DoubleRangeSlider
                    key={ratingResetKey}
                    initMin={ratingMin}
                    initMax={ratingMax}
                    value={filters.rating}
                    onChange={onRatingChange}
                />
                <GenreFilter
                    genres={genres}
                    selectedGenres={filters.genres}
                    onToggle={onGenreToggle}
                />
                <button type="button" className={s.reset} onClick={onReset}>
                    Reset filter
                </button>
            </div>
        </aside>
    )
}
