import {Container} from "@/common/components/Container/Container.tsx";
import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";
import {useLazyGetDiscoverMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {SORT_FIELDS, SORT_ORDERS} from "@/feature/Movie/api/movieApi.types.ts";
import s from './FilteredPage.module.css'
import {DoubleRangeSlider} from "@/feature/Movie/ui/FilteredPage/DoubleRangeSlide/DoubleRangeSlider.tsx";
import type {ChangeEvent} from "react";

export const FilteredPage = () => {

    const [trigger, {data}] = useLazyGetDiscoverMoviesQuery({})

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        // trigger(e.currentTarget.value)
    }

    if (!data) {

        return (
            <>
                <h2>Нет выбранных</h2>
                <aside>
                    <h3>Filters / Sort</h3>
                    <select name="sortBy" id="sort" onChange={onchangeHandler}>
                        <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.ASC}`}>Popularity↓</option>
                        <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.DESC}`}>Popularity↑</option>
                        <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.ASC}`}>Rating↓</option>
                        <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.DESC}`}>Rating↑</option>
                        <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.ASC}`}>Release Date↓</option>
                        <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.DESC}`}>Release Date↑</option>
                        <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.ASC}`}>Title A-Z↓</option>
                        <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.DESC}`}>Title Z-A↑</option>
                    </select>
                    <DoubleRangeSlider />
                </aside>
            </>

        )
    }

    return (
        <Container>
            <div className={s.container}>
                <aside>
                    <h3>Filters / Sort</h3>
                    <select name="sortBy" id="sort" onChange={onchangeHandler}>
                        <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.ASC}`}>Popularity↓</option>
                        <option value={`${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.DESC}`}>Popularity↑</option>
                        <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.ASC}`}>Rating↓</option>
                        <option value={`${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.DESC}`}>Rating↑</option>
                        <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.ASC}`}>Release Date↓</option>
                        <option value={`${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.DESC}`}>Release Date↑</option>
                        <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.ASC}`}>Title A-Z↓</option>
                        <option value={`${SORT_FIELDS.TITLE}.${SORT_ORDERS.DESC}`}>Title Z-A↑</option>
                    </select>
                    <DoubleRangeSlider />
                </aside>
                <MovieCards movies={data.results}/>
            </div>
        </Container>
    )
}