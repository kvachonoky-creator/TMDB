import type {Theme} from "@/app/model/appSlice.types.ts";
import type {Favorite} from "@/common/types/types.ts";
import {FavoriteMovies} from "@/common/constants";
import {createAppSlice} from "@/common/utils";
import type {Movie, MovieSimilarItem} from "@/feature/Movie/api/movieApi.types.ts";

export const appSlice = createAppSlice({
    name: 'appSlice',
    initialState: {
        theme: 'light' as Theme,
        favoriteMovies: JSON.parse(localStorage.getItem(FavoriteMovies) || '[]') as Favorite[]
    },
    selectors: {
        selectTheme: (state) => state.theme,
        selectFavoriteMovies: (state) => state.favoriteMovies
    },
    reducers: (create) => ({
        toggleFavoritesMovies: create.asyncThunk((movie:Favorite) => {
            const key = localStorage.getItem(FavoriteMovies)
            const store = key ? JSON.parse(key) : []

            const index = store.findIndex(m => m.id === movie.id)
            if (index !== -1) {
                store.splice(index, 1)
            } else {
                const moviesData = {
                    title: movie.title,
                    vote_average: movie.vote_average,
                    id: movie.id,
                    poster_path: movie.poster_path
                }
                store.push(moviesData)
            }
            localStorage.setItem(FavoriteMovies, JSON.stringify(store))
            return store
        }, {
            fulfilled: (state, action) => {
                state.favoriteMovies = action.payload
            }
        }),
        toggleTheme: create.reducer((state, action) => {
            // state.theme = action.payload
        })
    })
})

export const {toggleFavoritesMovies, toggleTheme} = appSlice.actions;
export const {selectTheme, selectFavoriteMovies} = appSlice.selectors