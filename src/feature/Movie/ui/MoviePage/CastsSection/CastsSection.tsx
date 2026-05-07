import {ActorPoster, IMAGE_BASE_URL} from "@/common/constants";
import type {MovieCredits} from "@/common/types";
import s from './CastsSection.module.css'

type Props = {
    cast: MovieCredits['cast']
}

export const CastsSection = ({cast}: Props) => {

    if (cast.length === 0) {
        return null
    }

    return (
        <div className={s.castSection}>
            <h2 className={s.castTitle}>Cast</h2>
            <div className={s.castGrid}>
                {cast.slice(0, 6).map(a => (
                    <div className={s.actor} key={a.id}>
                        <img
                            className={s.actorImg}
                            src={a.profile_path ? IMAGE_BASE_URL + a.profile_path : ActorPoster}
                            alt={a.name}
                        />
                        <p className={s.actorName}>{a.name}</p>
                        <p className={s.actorCharacter}>{a.character}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
