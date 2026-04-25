import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";
import s from './MovieSection.module.css'
import {Link} from "react-router";
import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";

type Props = {
    title: string,
    movies: Movie[]
}

export const MovieSection = ({title, movies}: Props) => {
    return (
        <section>
            <h2>{title}</h2>
            <Link className={s.viewMore} title='View more'>View more</Link>
            <MovieCards movies={movies}/>
        </section>
    );
};
