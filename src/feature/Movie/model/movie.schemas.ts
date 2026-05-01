import * as z from "zod"

// --- Movie ---
export const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

// --- Date ---
export const Date = z.object({
    maximum: z.string(),
    minimum: z.string(),
});

// --- BaseResponse ---
export const BaseResponseSchema = z.object({
    dates: Date.optional(),
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

// --- SearchQueryParams ---
export const SearchQueryParamsSchema = z.object({
    query: z.string(),
    include_adult: z.boolean().optional(),
    language: z.string().optional(),
    primary_release_year: z.string().optional(),
    page: z.number().optional(),
    region: z.string().optional(),
    year: z.string().optional(),
});

// --- Sort ---


export const SortBySchema = z.string().regex(
    /^(popularity|primary_release_date|title|vote_average)\.(asc|desc)$/
);

// --- Genres ---
const Genres = z.object({
    id: z.number(),
    name: z.string(),
});

export const GenresResponseSchema = z.object({
    genres: z.array(Genres),
});

// --- MovieDetails ---
const Collection = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
});

const Genre = z.object({
    id: z.number(),
    name: z.string(),
});

const ProductionCompany = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
});

const ProductionCountry = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

const SpokenLanguage = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
});

export const MovieDetailsSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: Collection.nullable(),
    budget: z.number(),
    genres: z.array(Genre),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string().nullable(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(ProductionCompany),
    production_countries: z.array(ProductionCountry),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number().nullable(),
    spoken_languages: z.array(SpokenLanguage),
    status: z.string(),
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

// --- Credits ---
const BasePerson = z.object({
    adult: z.boolean(),
    gender: z.number(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    credit_id: z.string(),
});

const CastMember = BasePerson.extend({
    cast_id: z.number(),
    character: z.string(),
    order: z.number(),
});



const CrewMember = BasePerson.extend({
    department: z.string(),
    job: z.string(),
});

export const MovieCreditsSchema = z.object({
    id: z.number(),
    cast: z.array(CastMember),
    crew: z.array(CrewMember),
});

// --- Similar ---
const MovieSimilarItem = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const MovieSimilarResponseSchema = z.object({
    page: z.number(),
    results: z.array(MovieSimilarItem),
    total_pages: z.number(),
    total_results: z.number(),
});