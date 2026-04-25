import s from "@/common/components/movieSection/MovieSection.module.css";
import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";

type Props = {
    movies: Movie[];
}

export const MovieCards = ({movies}: Props) => {
    return (
        <div className={s.moviesContainer}>
            {movies.map((movie) => (
                <article className={s.movie} key={movie.id}>
                    <button>Like</button>
                    <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="movie backdrop"/>
                    <h3>{movie.title}</h3>
                    <span>rating: {movie.vote_average.toFixed(1)}</span>
                </article>
            ))}
        </div>

    )
}
