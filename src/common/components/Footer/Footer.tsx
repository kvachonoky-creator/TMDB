import s from './Footer.module.css'
import type {Theme} from "@/app/model/appSlice.types.ts";

type Props = {
    className: Theme;
}

export const Footer = ({className}: Props) => {
    return (
        <footer className={`${s.footer} ${s[className]}`}>
            © 2025 Kinopoisk Demo · Data courtesy of TMDB.
        </footer>
    )
}