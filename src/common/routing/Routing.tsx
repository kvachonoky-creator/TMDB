import {Route, Routes} from "react-router";
import {MainPage} from "@/feature/Movie/ui/MainPage/MainPage.tsx";
import {CategoryPage} from "@/feature/Movie/ui/CategoryPage/CategoryPage.tsx";
import {FilteredPage} from "@/feature/Movie/ui/FilteredPage/FilteredPage.tsx";
import {SearchPage} from "@/feature/Movie/ui/SearchPage/SearchPage.tsx";
import {FavoritesPage} from "@/feature/Movie/ui/FavoritesPage/FavoritesPage.tsx";
import {PageNotFound} from "@/common/components/pageNotFound/PageNotFound.tsx";

export const Path = {
    Main: '/',
    Category: '/movie',
    Filtered: '/filtered',
    Search: '/search',
    Favorites: '/favorites',
    PageNotFound: '*',
} as const


export const Routing = () => {

    return (
        <Routes>
            <Route path={Path.Main} element={<MainPage/>}/>
            <Route path={`${Path.Category}/:categoryName`} element={<CategoryPage/>}/>
            <Route path={Path.Filtered} element={<FilteredPage/>}/>
            <Route path={Path.Search} element={<SearchPage/>}/>
            <Route path={Path.Favorites} element={<FavoritesPage/>}/>
            <Route path={Path.PageNotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}