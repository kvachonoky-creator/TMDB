import {useState} from "react";
import {Container} from "@/common/components/Container/Container.tsx";
import {useGetDiscoverMoviesQuery, useGetMoviesGenreQuery} from "@/feature/Movie/api/movieApi.ts";
import s from './FilteredPage.module.css'
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import type {SortBy} from "@/common/types";
import {MovieSectionSkeleton} from "@/common/components/MovieSectionSkeleton/MovieSectionSkeleton.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MovieFiltersPanel} from "@/feature/Movie/ui/FilteredPage/ui/MovieFiltersPanel/MovieFiltersPanel.tsx";
import type {MovieFilters, RatingRange} from "@/feature/Movie/ui/FilteredPage/model/types.ts";

const ratingMin = 0
const ratingMax = 10

const initialFilters: MovieFilters = {
    sortBy: 'popularity.desc',
    genres: [],
    rating: {
        min: ratingMin,
        max: ratingMax,
    },
}

export const FilteredPage = () => {

    const {data: genres} = useGetMoviesGenreQuery()

    const [currentPage, setCurrentPage] = useState(1)
    const [filters, setFilters] = useState<MovieFilters>(initialFilters)
    const [ratingResetKey, setRatingResetKey] = useState(0)

    const params = {
        sort_by: filters.sortBy,
        with_genres: filters.genres.join(','),
        'vote_average.gte': filters.rating.min,
        'vote_average.lte': filters.rating.max,
        page: currentPage
    }

    const {data, isFetching} = useGetDiscoverMoviesQuery(params)

    const handleSortChange = (sortBy: SortBy) => {
        setCurrentPage(1)
        setFilters(current => ({
            ...current,
            sortBy,
        }))
    }

    const handleRatingChange = (rating: RatingRange) => {
        setCurrentPage(1)
        setFilters(current => ({
            ...current,
            rating,
        }))
    }

    const handleGenreToggle = (genreId: string) => {
        setCurrentPage(1)
        setFilters(current => ({
            ...current,
            genres: current.genres.includes(genreId)
                ? current.genres.filter(id => id !== genreId)
                : [...current.genres, genreId],
        }))
    }

    const handleReset = () => {
        setCurrentPage(1)
        setFilters(initialFilters)
        setRatingResetKey(key => key + 1)
    }

    return (
        <Container>
            <div className={s.container}>
                {isFetching && <LinearProgress/>}
                <MovieFiltersPanel
                    filters={filters}
                    genres={genres?.genres}
                    ratingMin={ratingMin}
                    ratingMax={ratingMax}
                    ratingResetKey={ratingResetKey}
                    onSortChange={handleSortChange}
                    onRatingChange={handleRatingChange}
                    onGenreToggle={handleGenreToggle}
                    onReset={handleReset}
                />
                {data
                    ? <MovieCards movies={data.results}/>
                    : <MovieSectionSkeleton amount={20} columns={5}/>}
            </div>
            {data && (
                <Pagination
                    currentPage={data.page}
                    setCurrentPage={setCurrentPage}
                    pagesCount={data.total_pages}
                />
            )}
        </Container>
    )
}
