import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/feature/Movie/api/movieApi.ts";
import {getRandomBackdrop} from "@/common/utils";
import s from './MainPage.module.css'
import {SearchInput} from "@/common/components/searchInput/SearchInput.tsx";
import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";

export const MainPage = () => {

    const {data: popularMovies} = useGetPopularMoviesQuery()
    const {data:  topRatedMovies} = useGetTopRatedMoviesQuery()
    const {data: upcomingMovies} = useGetUpcomingMoviesQuery()
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery()

    let backdrop = undefined

        if (popularMovies) {
            backdrop = getRandomBackdrop(popularMovies.results)
        }



        return (
            <>
                <img className={s.backdrop} src={backdrop} alt="backdrop image"/>
                <SearchInput/>
                <h2>Popular Movies</h2>
                <div className={s.moviesContainer}>
                    {popularMovies && popularMovies.results.map((movie) => (
                        <div className={s.movie} key={movie.id}>
                            <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="movie backdrop"/>
                            <h3>{movie.title}</h3>
                            <span>rating: {Math.round(movie.vote_average * 100) / 100}</span>
                        </div>

                    ))}
                </div>
                <h2>Top Rated Movies</h2>
                <div className={s.moviesContainer}>
                    {topRatedMovies && topRatedMovies.results.map((movie) => (
                        <div className={s.movie} key={movie.id}>
                            <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="movie backdrop"/>
                            <h3>{movie.title}</h3>
                            <span>rating: {Math.round(movie.vote_average * 100) / 100}</span>
                        </div>

                    ))}
                </div>
                <h2>Upcoming Movies</h2>
                <div className={s.moviesContainer}>
                    {upcomingMovies && upcomingMovies.results.map((movie) => (
                        <div className={s.movie} key={movie.id}>
                            <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="movie backdrop"/>
                            <h3>{movie.title}</h3>
                            <span>rating: {Math.round(movie.vote_average * 100) / 100}</span>
                        </div>

                    ))}
                </div>
                <h2>Now Playing Movies</h2>
                <div className={s.moviesContainer}>
                    {nowPlayingMovies && nowPlayingMovies.results.map((movie) => (
                        <div className={s.movie} key={movie.id}>
                            <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="movie backdrop"/>
                            <h3>{movie.title}</h3>
                            <span>rating: {Math.round(movie.vote_average * 100) / 100}</span>
                        </div>

                    ))}
                </div>

            </>

        )
}