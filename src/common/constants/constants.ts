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