import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import s from './MainHero.module.css'

type Props = {
    backdrop?: string
    onSearch: (title: string) => void
}

export const MainHero = ({backdrop, onSearch}: Props) => {
    return (
        <div className={s.hero}>
            {backdrop && (
                <img className={s.backdrop} src={backdrop} alt="backdrop"/>
            )}
            <div className={s.heroContent}>
                <h1 className={s.heroTitle}>WELCOME</h1>
                <p className={s.heroSubtitle}>Browse highlighted titles from TMDB</p>
                <SearchInput className={s.heroSearch} onClick={onSearch}/>
            </div>
        </div>
    )
}
