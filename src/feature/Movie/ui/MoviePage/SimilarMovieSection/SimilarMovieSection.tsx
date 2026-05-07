import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import type {Movie} from "@/common/types";
import s from './SimilarMovieSection.module.css'

type Props = {
    movies: Movie[]
}

export const SimilarMovieSection = ({movies}: Props) => {
    if (movies.length === 0) {
        return null
    }

    return (
        <div>
            <h2 className={s.similarTitle}>Similar Movies</h2>
            <MovieCards movies={movies.slice(0, 6)} columns={6}/>
        </div>
    )
}
