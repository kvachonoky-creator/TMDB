import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";
import {useAppSelector} from "@/common/hooks";
import {selectFavoriteMovies} from "@/app/model/appSlice.ts";

export const FavoritesPage = () => {
    const movies = useAppSelector(selectFavoriteMovies)

    if (movies.length === 0) {
        return <h2>Нет избранных фильмов</h2>
    }
    return (
        <MovieCards movies={movies}/>
    )
}