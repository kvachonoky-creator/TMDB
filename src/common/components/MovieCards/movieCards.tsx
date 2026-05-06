import {FilmPoster, IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Favorite, Movie} from "@/common/types/types.ts";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {selectFavoriteMovies, toggleFavoritesMovies} from "@/app/model/appSlice.ts";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {type CSSProperties, type MouseEvent} from 'react'
import s from './movieCards.module.css'
import {getRatingClass} from "@/common/utils";

type Props = {
    movies: Movie[] | Favorite[];
    columns?: number;
    mobileCarousel?: boolean;
}

export const MovieCards = ({movies, columns = 5, mobileCarousel = false}: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const favoriteMovies = useAppSelector(selectFavoriteMovies); //

    const isFavorite = (id: number) => favoriteMovies.some(m => m.id === id);

    const onClickHandler = (movie: Movie, e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const favorite: Favorite = {
            id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path}
        dispatch(toggleFavoritesMovies(favorite))
    }
    const onClickArticleHandler = (id: number) => navigate(`${Path.Movie}/${id}`)

    return (
        <div
            className={`${s.moviesContainer} ${mobileCarousel ? s.mobileCarousel : ''}`}
            style={{'--columns': columns} as CSSProperties}
        >
            {movies.map((movie) => (
                <article className={s.movie} key={movie.id} onClick={() => onClickArticleHandler(movie.id)}>
                    <button
                        className={`${s.likeBtn} ${isFavorite(movie.id) ? s.liked : ''}`}
                        onClick={(e) => onClickHandler(movie, e)}>♥
                    </button>
                    <img src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : FilmPoster}
                         alt="movie backdrop"/>
                    <h3>{movie.title}</h3>
                    <span className={`${s[getRatingClass(movie.vote_average)]}`}>{movie.vote_average.toFixed(1)}</span>
                </article>
            ))}
        </div>

    )
}
