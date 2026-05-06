import {useGetCategoryMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {getCategoryPath, getRandomBackdrop} from "@/common/utils";
import s from './MainPage.module.css'
import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import {MovieSection} from "@/common/components/MovieSection/MovieSection.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {Category} from "@/common/constants";
import {Container} from "@/common/components/Container/Container.tsx";
import {MovieSectionSkeleton} from "@/common/components/MovieSectionSkeleton/MovieSectionSkeleton.tsx";

export const MainPage = () => {

    const {data: popularMovies} = useGetCategoryMoviesQuery({category: Category.Popular})
    const {data: topRatedMovies} = useGetCategoryMoviesQuery({category: Category.TopRated})
    const {data: upcomingMovies} = useGetCategoryMoviesQuery({category: Category.Upcoming})
    const {data: nowPlayingMovies} = useGetCategoryMoviesQuery({category: Category.NowPlaying})

    const navigate = useNavigate()

    const backdrop = popularMovies ? getRandomBackdrop(popularMovies.results) : undefined

    const onClickHandler = (title: string) => {
        if (!title) return;
        navigate({
            pathname: Path.Search,
            search: `query=${title}`,
        })
    }
    return (
        <Container>
            <div className={s.hero}>
                {backdrop && (
                    <img className={s.backdrop} src={backdrop} alt="backdrop"/>
                )}
                <div className={s.heroContent}>
                    <h1 className={s.heroTitle}>WELCOME</h1>
                    <p className={s.heroSubtitle}>Browse highlighted titles from TMDB</p>
                    <SearchInput onClick={(title) => onClickHandler(title)}/>
                </div>
            </div>

            <div className={s.sections}>
                {popularMovies ? (
                    <MovieSection columns={6}
                                  to={getCategoryPath(Category.Popular)}
                                  title='Popular Movies'
                                  movies={popularMovies.results.slice(0, 6)}
                                  mobileCarousel
                    />
                ) : <MovieSectionSkeleton amount={6} title='Popular Movies'  to={getCategoryPath(Category.Popular)}/>}
                {topRatedMovies ? (
                    <MovieSection columns={6}
                                  to={getCategoryPath(Category.TopRated)}
                                  title='Top Rated Movies'
                                  movies={topRatedMovies.results.slice(0, 6)}
                                  mobileCarousel
                    />
                ) : <MovieSectionSkeleton amount={6} title='Top Rated Movies'  to={getCategoryPath(Category.TopRated)}/>}
                {upcomingMovies ? (
                    <MovieSection columns={6}
                                  to={getCategoryPath(Category.Upcoming)}
                                  title='Upcoming'
                                  movies={upcomingMovies.results.slice(0, 6)}
                                  mobileCarousel
                    />
                ) : <MovieSectionSkeleton amount={6} title='Upcoming'  to={getCategoryPath(Category.Upcoming)}/>}
                {nowPlayingMovies ? (
                    <MovieSection columns={6}
                                  to={getCategoryPath(Category.NowPlaying)}
                                  title="Now Playing"
                                  movies={nowPlayingMovies.results.slice(0, 6)}
                                  mobileCarousel
                    />
                ) : <MovieSectionSkeleton amount={6}  title="Now Playing"  to={getCategoryPath(Category.NowPlaying)}/>}
            </div>
        </Container>
    )
}
