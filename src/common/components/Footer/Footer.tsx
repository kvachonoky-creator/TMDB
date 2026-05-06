import s from './Footer.module.css'
import type {Theme} from "@/app/model/appSlice.types.ts";

type Props = {
    className: Theme;
}

export const Footer = ({className}: Props) => {
    return (
        <footer className={`${s.footer} ${s[className]}`}>
            <span>&copy; 2026 Kinopoisk Demo</span>
            <span className={s.separator}>&middot;</span>
            <span>Data courtesy of TMDB.</span>
        </footer>
    )
}
