import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import type {BaseResponse} from "@/common/types";
import s from './SearchResults.module.css'

type Props = {
    query: string
    data?: BaseResponse
}

export const SearchResults = ({query, data}: Props) => {
    if (!query) {
        return <p className={s.hint}>Enter a movie title to start searching.</p>
    }

    if (!data) {
        return null
    }

    if (data.results.length === 0) {
        return <p className={s.noResults}>No matches found for "{query}".</p>
    }

    return (
        <>
            <p className={s.hint}>Results for "{query}"</p>
            <MovieCards movies={data.results}/>
        </>
    )
}
