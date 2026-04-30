import s from "@/common/components/MovieSection/MovieSection.module.css";
import {FilmPoster, IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Favorite} from "@/common/types/types.ts";
import {useAppDispatch} from "@/common/hooks";
import {toggleFavoritesMovies} from "@/app/model/appSlice.ts";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {type MouseEvent} from 'react'

type Props = {
    movies: Favorite[];
}

export const MovieCards = ({movies}: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onClickHandler = (movie: Favorite, e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(toggleFavoritesMovies(movie))
    }
    const onClickArticleHandler = (id: number) => navigate(`${Path.Movie}/${id}`)

    return (
        <div className={s.moviesContainer}>
            {movies.map((movie) => (
                <article className={s.movie} key={movie.id} onClick={() => onClickArticleHandler(movie.id)}>
                    <button onClick={(e) => onClickHandler(movie, e)}>Like</button>
                    <img src={movie.poster_path? IMAGE_BASE_URL + movie.poster_path : FilmPoster} alt="movie backdrop"/>
                    <h3>{movie.title}</h3>
                    <span>rating: {movie.vote_average.toFixed(1)}</span>
                </article>
            ))}
        </div>

    )
}
