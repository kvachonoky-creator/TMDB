import {useNavigate, useParams} from "react-router";
import {
    useGetMoviesCreditsQuery,
    useGetMoviesDetailsQuery,
    useGetMoviesSimilarQuery
} from "@/feature/Movie/api/movieApi.ts";
import {Container} from "@/common/components/Container/Container.tsx";
import {ActorPoster, FilmPoster, IMAGE_BASE_URL} from "@/common/constants";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import s from './MoviePage.module.css'
import {formatRuntime} from "@/common/utils";

function getRatingClass(rating: number) {
    if (rating >= 7) return s.ratingGreen
    if (rating >= 5.5) return s.ratingYellow
    return s.ratingRed
}


export const MoviePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {data: movie} = useGetMoviesDetailsQuery(id)
    const {data: actors} = useGetMoviesCreditsQuery(id)
    const {data: similar} = useGetMoviesSimilarQuery(id)

    const onClickHandler = () => navigate(-1)

    if (!movie && !actors && !similar) {
        return <span>loading...</span>
    }

    if (movie && actors && similar) {
        const year = movie.release_date?.slice(0, 4)
        const rating = movie.vote_average

        return (
            <Container>
                <section className={s.section}>
                    <div className={s.movieInfo}>
                        <button className={s.backBtn} onClick={onClickHandler}>Back</button>
                        <img
                            className={s.poster}
                            src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : FilmPoster}
                            alt='poster'
                        />
                        <div className={s.details}>
                            <h1 className={s.title}>{movie.title}</h1>

                            <div className={s.meta}>
                                <span>Release year: {year}</span>
                                <div className={`${s.ratingBadge} ${getRatingClass(rating)}`}>
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
                    <div className={s.castSection}>
                        <h2 className={s.castTitle}>Cast</h2>
                        <div className={s.castGrid}>
                            {actors.cast.slice(0, 6).map(a => (
                                <div className={s.actor} key={a.id}>
                                    <img
                                        className={s.actorImg}
                                        src={a.profile_path ? IMAGE_BASE_URL + a.profile_path : ActorPoster}
                                        alt={a.name}
                                    />
                                    <p className={s.actorName}>{a.name}</p>
                                    <p className={s.actorCharacter}>{a.character}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {similar.results.length > 0 && (
                        <div>
                            <h2 className={s.similarTitle}>Similar Movies</h2>
                            <MovieCards movies={similar.results.slice(0, 6)}/>
                        </div>
                    )}
                </section>
            </Container>
        )
    }
}
