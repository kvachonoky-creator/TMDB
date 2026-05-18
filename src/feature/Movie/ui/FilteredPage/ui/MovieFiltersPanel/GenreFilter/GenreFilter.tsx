import type {GenresResponse} from "@/common/types";
import s from './GenreFilter.module.css'

type Genre = GenresResponse['genres'][number]

type Props = {
    genres?: Genre[]
    selectedGenres: string[]
    onToggle: (genreId: string) => void
}

export const GenreFilter = ({genres, selectedGenres, onToggle}: Props) => {
    if (!genres) {
        return null
    }

    return (
        <div className={s.genresContainer}>
            {genres.map(genre => {
                const genreId = String(genre.id);

                return (
                    <label className={s.chip} key={genre.id}>
                        <input
                            className={s.input}
                            type="checkbox"
                            name="genre"
                            value={genre.id}
                            checked={selectedGenres.includes(genreId)}
                            onChange={() => onToggle(genreId)}
                        />
                        <span className={s.label}>{genre.name}</span>
                    </label>
                )
            })}
        </div>
    )
}
