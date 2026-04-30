export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export const Category = {
    Popular: 'popular',
    TopRated: 'top_rated',
    NowPlaying: 'now_playing',
    Upcoming: 'upcoming'
} as const

export const CategoryPageTitle: Record<string, string> = {
    [Category.Popular]: 'Popular Movies',
    [Category.TopRated]: 'Top Rated Movies',
    [Category.NowPlaying]: 'Now Playing Movies',
    [Category.Upcoming]: 'Upcoming Movies',
}

export const FavoriteMovies = 'Favorite Movies'

export const ThemeMode = 'Theme Mode'

export const ActorPoster = 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png'

export const FilmPoster = 'https://thecrookedroadva.com/wp-content/uploads/2025/04/default-image-768x768.webp'