import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
} from "@/feature/Movie/api/movieApi.ts";
import {getRandomBackdrop} from "@/common/utils";
import s from './MainPage.module.css'
import {SearchInput} from "@/common/components/searchInput/SearchInput.tsx";
import {MovieSection} from "@/common/components/movieSection/MovieSection.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";

export const MainPage = () => {

    const {data: popularMovies} = useGetPopularMoviesQuery()
    const {data: topRatedMovies} = useGetTopRatedMoviesQuery()
    const {data: upcomingMovies} = useGetUpcomingMoviesQuery()
    const {data: nowPlayingMovies} = useGetNowPlayingMoviesQuery() // Кастомный хук? можно в массив, а потом отмапить, чтобы компонента была меньше

    const navigate = useNavigate()

    let backdrop = undefined

    if (popularMovies) {
        backdrop = getRandomBackdrop(popularMovies.results)
    }

    const onClickHandler = (title: string) => {
        navigate({
            pathname: Path.Search,
            search: `query=${title}`,
        })
    }

    return (
        <>
            <img className={s.backdrop} src={backdrop} alt="backdrop image"/>
            <SearchInput onClick={(title) => onClickHandler(title)}/>
            {popularMovies && <MovieSection title='Popular Movies' movies={popularMovies.results.slice(0, 6)}/>}
            {topRatedMovies && <MovieSection title='Top Rated' movies={topRatedMovies.results.slice(0, 6)}/>}
            {upcomingMovies && <MovieSection title='Upcoming' movies={upcomingMovies.results.slice(0, 6)}/>}
            {nowPlayingMovies &&
                <MovieSection title='Now Playing Movies' movies={nowPlayingMovies.results.slice(0, 6)}/>}
        </>
    )
}