import s from './MovieInfo.module.css'
import {FilmPoster, IMAGE_BASE_URL} from "@/common/constants";
import {formatRuntime, getRatingClass} from "@/common/utils";
import type {MovieDetails} from "@/common/types";

type Props = {
    movie: MovieDetails
}

export const MovieInfo = ({movie}: Props) => {
    const year = movie.release_date?.slice(0, 4)
    const rating = movie.vote_average

    return (
        <div className={s.movieInfo}>
            <img
                className={s.poster}
                src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : FilmPoster}
                alt='poster'
            />
            <div className={s.details}>
                <h1 className={s.title}>{movie.title}</h1>
                <div className={s.meta}>
                    <span>Release year: {year}</span>
                    <div className={`${s.ratingBadge} ${s[getRatingClass(rating)]}`}>
                        {rating.toFixed(1)}
                    </div>
                    <span>Runtime: {formatRuntime(movie.runtime)}</span>
                </div>
                <p className={s.overview}>{movie.overview}</p>
                <div>
                    <p className={s.genresTitle}>Genres</p>
                    <div className={s.genres}>
                        {movie.genres.map(g => (
                            <span className={s.genre} key={g.id}>{g.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
