import {NavLink, useParams} from "react-router";
import {useGetCategoryMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import s from './CategoryPage.module.css'
import {Category, CategoryPageTitle} from "@/common/constants";
import {getCategoryPath} from "@/common/utils";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {Container} from "@/common/components/Container/Container.tsx";

export const CategoryPage = () => {
    const {categoryName = 'popular'} = useParams();

    const [currentPage, setCurrentPage] = useState(1)

    const {data, isFetching, isLoading} = useGetCategoryMoviesQuery({category: categoryName, params: {page: currentPage}});

    if(isLoading) {
        return <h1>loading...</h1>
    }

    return (
        <Container>
            {isFetching && <LinearProgress/>}
            <section className={s.page}>
                <div className={s.tabs}>
                    <NavLink to={getCategoryPath(Category.Popular)}
                             className={({isActive}) => isActive ? s.active : ''}>Popular Movies</NavLink>
                    <NavLink to={getCategoryPath(Category.TopRated)}
                             className={({isActive}) => isActive ? s.active : ''}>Top Rated Movies</NavLink>
                    <NavLink to={getCategoryPath(Category.Upcoming)}
                             className={({isActive}) => isActive ? s.active : ''}>Upcoming Movies</NavLink>
                    <NavLink to={getCategoryPath(Category.NowPlaying)}
                             className={({isActive}) => isActive ? s.active : ''}>Now Playing Movies</NavLink>
                </div>

                <h2 className={s.title}>{CategoryPageTitle[categoryName]}</h2>

                {data && <MovieCards movies={data.results}/>}
                <Pagination currentPage={data!.page} setCurrentPage={setCurrentPage} pagesCount={data!.total_pages}/>
            </section>
        </Container>
    )
}