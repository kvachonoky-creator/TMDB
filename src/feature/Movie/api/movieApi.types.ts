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

type Genres = {
    id: number,
    name: string,
}

export type GenresResponse = {
    genres: Genres[]
}

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Collection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
};

export type Genre = {
    id: number;
    name: string;
};

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};


type BasePerson = {
    adult: boolean;
    gender: number; // 0: Not set, 1: Female, 2: Male, 3: Non-binary
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
};

type CastMember = BasePerson & {
    cast_id: number;
    character: string;
    order: number;
};

type CrewMember = BasePerson & {
    department: string;
    job: string;
};

export type MovieCredits = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}


export type MovieSimilarItem = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string; //
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type MovieSimilarResponse = {
    page: number;
    results: MovieSimilarItem[];
    total_pages: number;
    total_results: number;
};