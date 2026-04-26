import {FavoriteMovies} from "@/common/constants";
import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";

export const FavoritesPage = () => {
    const data = JSON.parse(localStorage.getItem(FavoriteMovies) || '[]')

    if (data.length === 0) {
        return <h2>Нет избранных фильмов</h2>
    }
    return (
        <MovieCards movies={data}/>

    )
}