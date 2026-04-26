import s from "@/common/components/movieSection/MovieSection.module.css";
import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";
import {toggleFavorite} from "@/common/utils";
import type {Favorite} from "@/common/types/types.ts";

type Props = {
    movies: Movie[] | Favorite[];
}

export const MovieCards = ({movies}: Props) => {

    const onClickHandler = (movie: Movie | Favorite) => toggleFavorite(movie)

    return (
        <div className={s.moviesContainer}>
            {movies.map((movie) => (
                <article className={s.movie} key={movie.id}>
                    <button onClick={() => onClickHandler(movie)}>Like</button>
                    <img src={IMAGE_BASE_URL + movie.poster_path} alt="movie backdrop"/>
                    <h3>{movie.title}</h3>
                    <span>rating: {movie.vote_average.toFixed(1)}</span>
                </article>
            ))}
        </div>

    )
}
