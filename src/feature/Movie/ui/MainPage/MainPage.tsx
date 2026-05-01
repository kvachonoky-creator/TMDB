import {useGetCategoryMoviesQuery,} from "@/feature/Movie/api/movieApi.ts";
import {getCategoryPath, getRandomBackdrop} from "@/common/utils";
import s from './MainPage.module.css'
import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import {MovieSection} from "@/common/components/MovieSection/MovieSection.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {Category} from "@/common/constants";
import {Container} from "@/common/components/Container/Container.tsx";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";

export const MainPage = () => {

    const {data: popularMovies} = useGetCategoryMoviesQuery({category: Category.Popular})
    const {data: topRatedMovies} = useGetCategoryMoviesQuery({category: Category.TopRated})
    const {data: upcomingMovies} = useGetCategoryMoviesQuery({category: Category.Upcoming})
    const {data: nowPlayingMovies, isFetching, isLoading} = useGetCategoryMoviesQuery({category: Category.NowPlaying}) // Кастомный хук? можно в массив, а потом отмапить, чтобы компонента была меньше, сделать может в хуке массив объектов, а потом тут отмапить, но как делать скелетон изначальный, нужно подумать + у меня должен background меняться

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
        <Container>
            {isFetching && <LinearProgress/>}
            <div>
                <h1>Welcome to TMDB!</h1>
                <h2>You can find a movie for every taste here.</h2>
                <SearchInput onClick={(title) => onClickHandler(title)}/>
            </div>
            <img className={s.backdrop} src={backdrop} alt="backdrop image"/>
            {popularMovies && <MovieSection to={getCategoryPath(Category.Popular)} title='Popular Movies'
                                            movies={popularMovies.results.slice(0, 6)}/>}
            {topRatedMovies && <MovieSection to={getCategoryPath(Category.TopRated)} title='Top Rated'
                                             movies={topRatedMovies.results.slice(0, 6)}/>}
            {upcomingMovies && <MovieSection to={getCategoryPath(Category.Upcoming)} title='Upcoming'
                                             movies={upcomingMovies.results.slice(0, 6)}/>}
            {nowPlayingMovies &&
                <MovieSection to={getCategoryPath(Category.NowPlaying)} title='Now Playing Movies'
                              movies={nowPlayingMovies.results.slice(0, 6)}/>}
        </Container>
    )
}