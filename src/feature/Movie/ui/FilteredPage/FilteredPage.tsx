import {Container} from "@/common/components/Container/Container.tsx";
import {useGetDiscoverMoviesQuery, useGetMoviesGenreQuery} from "@/feature/Movie/api/movieApi.ts";
import {type ChangeEvent, useState} from "react";
import s from './FilteredPage.module.css'
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import {useDebounce} from "@/common/hooks";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {SORT_FIELDS, SORT_ORDERS, type SortBy} from "@/common/types";
import {DoubleRangeSlider} from "@/feature/Movie/ui/FilteredPage/DoubleRangeSlide/DoubleRangeSlider.tsx";
import {MovieSectionSkeleton} from "@/common/components/MovieSectionSkeleton/MovieSectionSkeleton.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";


const initMin = 0
const initMax = 10

export const FilteredPage = () => {

    const {data: genres} = useGetMoviesGenreQuery()

    const [minValue, setMinValue] = useState(initMin);
    const [maxValue, setMaxValue] = useState(initMax);

    const [currentPage, setCurrentPage] = useState(1)

    const debouncedMin = useDebounce(minValue, 500);
    const debouncedMax = useDebounce(maxValue, 500);


    const [filters, setFilters] = useState({
        sort_by: 'popularity.desc' as SortBy,
        'with_genres': ''
    })

    const params = {
        ...filters,
        'vote_average.gte': debouncedMin,
        'vote_average.lte': debouncedMax,
        page: currentPage
    }

    const {data, isFetching} = useGetDiscoverMoviesQuery(params)

    const onchangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        setFilters({...params, sort_by: e.currentTarget.value as SortBy}) // пока так, потом может поменяю
    }

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {

        const selectedGenre = e.currentTarget.value;

        const updatedGenres = params.with_genres
            ? `${params.with_genres},${selectedGenre}`
            : selectedGenre;

        let updatedParams

        if (e.currentTarget.checked) {
            updatedParams = {...params, with_genres: updatedGenres};

        } else {
            updatedParams = {
                ...params,
                with_genres: updatedGenres.split(',').filter((p => p !== selectedGenre)).join(',')
            };
        }
        setFilters(updatedParams);
    }
    const onHandleReset = () => {
        setFilters({
            sort_by: 'popularity.desc',
            'with_genres': ''
        })
        setMinValue(initMin)
        setMaxValue(initMax)// надо будет переделать
    }


    return (
        <Container>
            <div className={s.container}>
                {isFetching && <LinearProgress/>}
                <aside className={s.filterContainer}>
                    <h3>Filters / Sort</h3>
                    <form onReset={onHandleReset}>
                        <select name="sortBy" id="sort" onChange={onchangeHandlerSelect}>
                            <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.DESC}`}>Popularity ↓
                            </option>
                            <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.ASC}`}>Popularity ↑</option>
                            <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.DESC}`}>Rating ↓</option>
                            <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.ASC}`}>Rating ↑</option>
                            <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.DESC}`}>Release Date ↓</option>
                            <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.ASC}`}>Release Date ↑</option>
                            <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.DESC}`}>Title A-Z</option>
                            <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.ASC}`}>Title Z-A</option>
                        </select>
                        <DoubleRangeSlider
                            initMin={initMin}
                            initMax={initMax}
                            minValue={minValue}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            setMinValue={setMinValue}/>
                        <div className={s.genresContainer}>
                            {genres && genres.genres.map(genre => {
                                return <label className={s.chip} key={genre.id}>
                                    <input type="checkbox" name="genre" value={genre.id}
                                           onChange={onChangeHandlerInput}/>
                                    <span>{genre.name}</span>
                                </label>
                            })}
                        </div>
                        <button type='reset' className={s.reset}>Reset filter</button>
                    </form>
                </aside>
                {data
                    ?
                            <MovieCards movies={data.results}/>
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
