import {useNavigate} from "react-router";
import {Container} from "@/common/components/Container/Container.tsx";
import {Category} from "@/common/constants";
import {Path} from "@/common/routing";
import {getCategoryPath, getRandomBackdrop} from "@/common/utils";
import {useGetCategoryMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {MainHero} from "@/feature/Movie/ui/MainPage/MainHero/MainHero.tsx";
import {MainMovieSections} from "@/feature/Movie/ui/MainPage/MainMovieSections/MainMovieSections.tsx";

export const MainPage = () => {
    const navigate = useNavigate()

    const {data: popularMovies} = useGetCategoryMoviesQuery({category: Category.Popular})
    const {data: topRatedMovies} = useGetCategoryMoviesQuery({category: Category.TopRated})
    const {data: upcomingMovies} = useGetCategoryMoviesQuery({category: Category.Upcoming})
    const {data: nowPlayingMovies} = useGetCategoryMoviesQuery({category: Category.NowPlaying})

    const backdrop = popularMovies ? getRandomBackdrop(popularMovies.results) : undefined

    const sections = [
        {
            title: 'Popular Movies',
            category: Category.Popular,
            data: popularMovies,
            to: getCategoryPath(Category.Popular),
        },
        {
            title: 'Top Rated Movies',
            category: Category.TopRated,
            data: topRatedMovies,
            to: getCategoryPath(Category.TopRated),
        },
        {
            title: 'Upcoming',
            category: Category.Upcoming,
            data: upcomingMovies,
            to: getCategoryPath(Category.Upcoming),
        },
        {
            title: 'Now Playing',
            category: Category.NowPlaying,
            data: nowPlayingMovies,
            to: getCategoryPath(Category.NowPlaying),
        },
    ]

    const onSearchHandler = (title: string) => {
        if (!title) return

        navigate({
            pathname: Path.Search,
            search: `query=${title}`,
        })
    }

    return (
        <Container>
            <MainHero backdrop={backdrop} onSearch={onSearchHandler}/>
            <MainMovieSections sections={sections}/>
        </Container>
    )
}
