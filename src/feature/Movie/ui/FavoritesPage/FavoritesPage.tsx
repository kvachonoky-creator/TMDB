import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import {useAppSelector} from "@/common/hooks";
import {selectFavoriteMovies} from "@/app/model/appSlice.ts";
import {Container} from "@/common/components/Container/Container.tsx";
import s from './FavoritesPage.module.css'

export const FavoritesPage = () => {
    const movies = useAppSelector(selectFavoriteMovies)

    return (
        <Container>
            <section className={s.page}>
                <h1 className={s.title}>Favorites</h1>
                {movies.length === 0 ? (
                    <p className={s.empty}>No favorite movies yet.<br/>Click ♥ on any movie to add it here.</p>
                ) : (
                    <>
                        <h2 className={s.subtitle}>Favorite Movies</h2>
                        <MovieCards movies={movies}/>
                    </>
                )}
            </section>
        </Container>
    )
}