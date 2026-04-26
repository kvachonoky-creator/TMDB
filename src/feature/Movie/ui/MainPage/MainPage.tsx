import {useGetCategoryMoviesQuery,} from "@/feature/Movie/api/movieApi.ts";
import {getCategoryPath, getRandomBackdrop} from "@/common/utils";
import s from './MainPage.module.css'
import {SearchInput} from "@/common/components/searchInput/SearchInput.tsx";
import {MovieSection} from "@/common/components/movieSection/MovieSection.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {Category} from "@/common/constants";

export const MainPage = () => {

    const {data: popularMovies} = useGetCategoryMoviesQuery(Category.Popular)
    const {data: topRatedMovies} = useGetCategoryMoviesQuery(Category.TopRated)
    const {data: upcomingMovies} = useGetCategoryMoviesQuery(Category.Upcoming)
    const {data: nowPlayingMovies} = useGetCategoryMoviesQuery(Category.NowPlaying) // Кастомный хук? можно в массив, а потом отмапить, чтобы компонента была меньше

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
            {popularMovies && <MovieSection to={getCategoryPath(Category.Popular)} title='Popular Movies'
                                            movies={popularMovies.results.slice(0, 6)}/>}
            {topRatedMovies && <MovieSection to={getCategoryPath(Category.TopRated)} title='Top Rated'
                                             movies={topRatedMovies.results.slice(0, 6)}/>}
            {upcomingMovies && <MovieSection to={getCategoryPath(Category.Upcoming)} title='Upcoming'
                                             movies={upcomingMovies.results.slice(0, 6)}/>}
            {nowPlayingMovies &&
                <MovieSection to={getCategoryPath(Category.NowPlaying)} title='Now Playing Movies'
                              movies={nowPlayingMovies.results.slice(0, 6)}/>}
        </>
    )
}