export type Movie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string // формат YYYY-MM-DD // iso в schemas
    title: string
    video: boolean
    vote_average: number
    vote_count: number
};

export type Date = {
    maximum: string
    minimum: string
}

export type BaseResponse = {
    dates?: Date
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export type SearchQueryParams = {
    query: string
    include_adult?: boolean
    language?: string
    primary_release_year?: string
    page?: number
    region?: string
    year?: string
};


export const SORT_FIELDS = {
    POPULARITY: 'popularity',
    RELEASE_DATE: 'primary_release_date',
    TITLE: 'title',
    VOTE_AVERAGE: 'vote_average',
} as const;

export const SORT_ORDERS = {
    ASC: 'asc',
    DESC: 'desc',
} as const;

export type SortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];
export type SortOrder = (typeof SORT_ORDERS)[keyof typeof SORT_ORDERS];

export type SortBy = `${SortField}.${SortOrder}`;

export type ResponseBody = {
    credit_type: string
    department: string
    job: string
    media: Media
    media_type: string
    id: string
    person: Person
};

type Media = {
    adult: boolean
    backdrop_path: string | null
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    poster_path: string | null
    media_type: string
    genre_ids: number[]
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
    origin_country: string[]
    character: string
    episodes: unknown[]
    seasons: Season[]
};

type Season = {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
    show_id: number
};

type Person = {
    adult: boolean
    id: number
    name: string
    original_name: string
    media_type: string
    popularity: number
    gender: number
    known_for_department: string
    profile_path: string | null
};
