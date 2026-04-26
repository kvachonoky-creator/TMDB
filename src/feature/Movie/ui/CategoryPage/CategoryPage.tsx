import {NavLink, useParams} from "react-router";
import {useGetCategoryMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";
import s from './CategoryPage.module.css'
import {Category, CategoryPageTitle} from "@/common/constants";
import {getCategoryPath} from "@/common/utils";


export const CategoryPage = () => {
    const {categoryName = 'popular'} = useParams();

    const {data} = useGetCategoryMoviesQuery(categoryName);

    return (
        <section>
            <NavLink to={getCategoryPath(Category.Popular)}
                     className={({isActive}) => isActive ? s.active : ''}>Popular Movies</NavLink>
            <NavLink to={getCategoryPath(Category.TopRated)}
                     className={({isActive}) => isActive ? s.active : ''}>Top Rated Movies</NavLink>
            <NavLink to={getCategoryPath(Category.NowPlaying)}
                     className={({isActive}) => isActive ? s.active : ''}>Now Playing Movies</NavLink>
            <NavLink to={getCategoryPath(Category.Upcoming)}
                     className={({isActive}) => isActive ? s.active : ''}>Upcoming Movies</NavLink>

            <h2>{CategoryPageTitle[categoryName]}</h2>

            {data && <MovieCards movies={data.results}/>}

        </section>
    )
}