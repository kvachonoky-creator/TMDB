import type {Theme} from "@/app/model/appSlice.types.ts";
import type {Favorite} from "@/common/types/types.ts";
import {FavoriteMovies, ThemeMode} from "@/common/constants";
import {createAppSlice} from "@/common/utils";

export const appSlice = createAppSlice({
    name: 'appSlice',
    initialState: {
        theme: 'light' as Theme,
        favoriteMovies: [] as Favorite[]
    },
    selectors: {
        selectTheme: (state) => state.theme,
        selectFavoriteMovies: (state) => state.favoriteMovies
    },
    reducers: (create) => ({
        toggleFavoritesMovies: create.asyncThunk((movie: Favorite) => {
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
        toggleTheme: create.asyncThunk(() => {
                const currentTheme = localStorage.getItem(ThemeMode);
                const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

                localStorage.setItem(ThemeMode, nextTheme);
                return nextTheme;
            },
            {
                fulfilled: (state, action) => {
                    state.theme = action.payload
                }
            })
    })
})

export const {toggleFavoritesMovies, toggleTheme} = appSlice.actions;
export const {selectTheme, selectFavoriteMovies} = appSlice.selectors