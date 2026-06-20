# TMDB Movie Explorer

Portfolio React application for browsing, searching, filtering, and saving movies using the TMDB API.

The project focuses on a feature-based frontend structure, typed API integration, runtime response validation, and reusable UI building blocks.

## Features

- Browse TMDB movie categories: popular, top rated, now playing, and upcoming.
- Search movies by title with URL query params and pagination.
- Filter discover results by genre, rating range, and sort order.
- Open a movie details page with poster, metadata, overview, genres, cast, and similar movies.
- Save favorite movies in `localStorage`.
- Switch between light and dark themes.
- Show skeleton states and linear loading indicators while API data is loading.
- Display API and schema validation errors with toast notifications.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- React Router
- Redux Toolkit and RTK Query
- Zod
- CSS Modules
- React Loading Skeleton
- React Toastify

## Architecture

The project uses a feature-based structure:

```txt
src/
  app/       # application shell, store, base API setup
  common/    # shared components, hooks, routing, types, utils, constants
  feature/
    Movie/   # movie API, schemas, pages, and movie-specific UI
```

Movie-related logic is grouped inside `feature/Movie`, while app-level infrastructure is kept in `app`. Reusable code lives in `common`, including layout components, movie cards, pagination, hooks, constants, and utility functions.

The [architecture documentation](docs/architecture/README.md) contains C4, dynamic, and sequence diagrams.

## API Integration

The app uses a shared RTK Query `baseApi` configured for TMDB:

- authorization is handled through a Vite environment variable;
- endpoints are declared in `feature/Movie/api/movieApi.ts`;
- external responses are validated with Zod schemas;
- API and schema errors are converted into user-facing toast notifications.

## Environment Variables

Create an `.env` file in the project root:

```env
VITE_ACCESS_TOKEN=your_tmdb_bearer_token
```

You can get a token from your TMDB account settings.

## Getting Started

```bash
pnpm install
pnpm run dev
```

## Available Scripts

```bash
pnpm run dev
pnpm run build
pnpm run lint
pnpm run preview
```

## Project Status

- Production build passes.
- ESLint passes.
- Automated tests are not added yet.

## Credits

Movie data and images are provided by [The Movie Database API](https://developer.themoviedb.org/docs). This project is not affiliated with TMDB.
