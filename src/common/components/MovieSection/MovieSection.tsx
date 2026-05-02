
import s from './MovieSection.module.css'
import {Link} from "react-router";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import type {Movie} from "@/common/types";

type Props = {
    title: string,
    movies: Movie[],
    to: string,
    columns?: number;
}

export const MovieSection = ({title, movies, to, columns}: Props) => {
    return (
        <section className={s.section}>
            <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>{title}</h2>
                <Link to={to} className={s.viewMore}>View more</Link>
            </div>
            <MovieCards movies={movies} columns={columns}/>
        </section>
    );
};