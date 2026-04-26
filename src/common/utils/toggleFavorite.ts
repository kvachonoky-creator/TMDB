import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";
import {FavoriteMovies} from "@/common/constants";
import type {Favorite} from "@/common/types/types.ts";

export const toggleFavorite = (movie: Movie | Favorite) => {
    const key = localStorage.getItem(FavoriteMovies)
    const moviesData = {title: movie.title, vote_average: movie.vote_average, id: movie.id, poster_path: movie.poster_path}
    if (!key) {
        localStorage.setItem(FavoriteMovies, JSON.stringify([moviesData]));
    } else {
        const store = JSON.parse(key)
        const index = store.findIndex((m: Movie) => m.id === movie.id)
        if (index !== -1) {
            store.splice(index, 1)
        } else {
            store.push(moviesData)
        }
        localStorage.setItem(FavoriteMovies, JSON.stringify(store));
    }
}