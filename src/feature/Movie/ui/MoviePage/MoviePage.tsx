import {useNavigate, useParams} from "react-router";
import {
    useGetMoviesCreditsQuery,
    useGetMoviesDetailsQuery,
    useGetMoviesSimilarQuery
} from "@/feature/Movie/api/movieApi.ts";
import {Container} from "@/common/components/Container/Container.tsx";
import {ActorPoster, FilmPoster, IMAGE_BASE_URL} from "@/common/constants";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";

export const MoviePage = () => {


    const {id} = useParams()

    const navigate = useNavigate();

    const {data: movie} = useGetMoviesDetailsQuery(id)
    const {data: actors} = useGetMoviesCreditsQuery(id)
    const {data: similar} = useGetMoviesSimilarQuery(id)

    const onClickHandler = () => {
        navigate(-1)
    }

    if (!movie && !actors && !similar) {
        return <span>loading...</span>
    }

    if (movie && actors && similar) {
        return (
            <Container>
                <section>
                    <button onClick={onClickHandler}>Back</button>
                    <img src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : FilmPoster} alt='poster'></img>
                    <h3>{movie.title}</h3>
                    <span>Release year{movie.release_date}</span>
                    <span>{movie.vote_average}</span>
                    {movie.genres.map(g => <span key={g.id}>{g.name}</span>)}
                    <span>Runtime: {movie.runtime}minute</span>
                    <p>{movie.overview}</p>
                    <div>
                        {actors.cast.slice(0, 6).map(a => <div key={a.id}>
                            <img src={a.profile_path ? IMAGE_BASE_URL + a.profile_path : ActorPoster}
                                 alt='profile'></img>
                            <span>{a.name}</span>
                            <span>{a.character}</span>
                        </div>)}
                    </div>
                    <MovieCards movies={similar.results.slice(0, 6)}/>
                </section>
            </Container>
        )
    }


}