import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";
import s from './MovieSection.module.css'
import {Link} from "react-router";

export type Props = {
    title: string,
    movies: Movie[]
}

export const MovieSection = ({title, movies}: Props) => {
    return (
        <section>
            <h2>{title}</h2>
            <Link className={s.viewMore} title='View more'>View more</Link>
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
        </section>
    );
};
