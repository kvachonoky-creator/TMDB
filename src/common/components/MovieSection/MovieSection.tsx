
import s from './MovieSection.module.css'
import {Link} from "react-router";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import type {Movie} from "@/common/types";

type Props = {
    title: string,
    movies: Movie[],
    to: string,
}

export const MovieSection = ({title, movies, to}: Props) => {
    return (
        <section>
            <h2>{title}</h2>
            <Link to={to} className={s.viewMore} title='View more'>View more</Link>
            <MovieCards movies={movies}/>
        </section>
    );
};
