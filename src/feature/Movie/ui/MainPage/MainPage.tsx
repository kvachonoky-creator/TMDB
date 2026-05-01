import { useGetCategoryMoviesQuery } from "@/feature/Movie/api/movieApi.ts";
import { getCategoryPath, getRandomBackdrop } from "@/common/utils";
import s from './MainPage.module.css'
import { SearchInput } from "@/common/components/SearchInput/SearchInput.tsx";
import { MovieSection } from "@/common/components/MovieSection/MovieSection.tsx";
import { useNavigate } from "react-router";
import { Path } from "@/common/routing";
import { Category } from "@/common/constants";
import { Container } from "@/common/components/Container/Container.tsx";
import { LinearProgress } from "@/common/components/LinearProgress/LinearProgress.tsx";

export const MainPage = () => {

    const { data: popularMovies } = useGetCategoryMoviesQuery({ category: Category.Popular })
    const { data: topRatedMovies } = useGetCategoryMoviesQuery({ category: Category.TopRated })
    const { data: upcomingMovies } = useGetCategoryMoviesQuery({ category: Category.Upcoming })
    const { data: nowPlayingMovies, isFetching } = useGetCategoryMoviesQuery({ category: Category.NowPlaying })

    const navigate = useNavigate()

    const backdrop = popularMovies ? getRandomBackdrop(popularMovies.results) : undefined

    const onClickHandler = (title: string) => {
        navigate({
            pathname: Path.Search,
            search: `query=${title}`,
        })
    }

    return (
        <Container>
            {isFetching && <LinearProgress />}

            <div className={s.hero}>
                {backdrop && (
                    <img className={s.backdrop} src={backdrop} alt="backdrop" />
                )}
                <div className={s.heroContent}>
                    <h1 className={s.heroTitle}>WELCOME</h1>
                    <p className={s.heroSubtitle}>Browse highlighted titles from TMDB</p>
                    <SearchInput onClick={(title) => onClickHandler(title)} />
                </div>
            </div>

            <div className={s.sections}>
                {popularMovies && (
                    <MovieSection columns={6}
                        to={getCategoryPath(Category.Popular)}
                        title="Popular Movies"
                        movies={popularMovies.results.slice(0, 6)}
                    />
                )}
                {topRatedMovies && (
                    <MovieSection columns={6}
                        to={getCategoryPath(Category.TopRated)}
                        title="Top Rated Movies"
                        movies={topRatedMovies.results.slice(0, 6)}
                    />
                )}
                {upcomingMovies && (
                    <MovieSection columns={6}
                        to={getCategoryPath(Category.Upcoming)}
                        title="Upcoming"
                        movies={upcomingMovies.results.slice(0, 6)}
                    />
                )}
                {nowPlayingMovies && (
                    <MovieSection columns={6}
                        to={getCategoryPath(Category.NowPlaying)}
                        title="Now Playing"
                        movies={nowPlayingMovies.results.slice(0, 6)}
                    />
                )}
            </div>
        </Container>
    )
}
