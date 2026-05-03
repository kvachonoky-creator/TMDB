import Skeleton from "react-loading-skeleton";
import s from '../MoviePage.module.css'

export const MoviePageSkeleton = () => {
    return (
        <div className={s.section}>
            <div className={s.movieInfo}>
                <Skeleton height={420} width={280} borderRadius={16}/>

                <div className={s.details}>
                    <Skeleton width="60%" height={36}/>

                    <div className={s.meta}>
                        <Skeleton width={120} height={20}/>
                        <Skeleton circle width={40} height={40}/>
                        <Skeleton width={100} height={20}/>
                    </div>
                    <Skeleton count={4} height={16}/>
                    <div>
                        <Skeleton width={80} height={20} style={{marginBottom: 8}}/>
                        <div style={{display: 'flex', gap: 8}}>
                            {Array.from({length: 4}, (_, i) => (
                                <Skeleton key={i} width={80} height={32} borderRadius={999}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.castSection}>
                <Skeleton width={80} height={28} style={{marginBottom: 8}}/>
                <div className={s.castGrid}>
                    {Array.from({length: 6}, (_, i) => (
                        <div key={i} className={s.actor}>
                            <Skeleton circle width={100} height={100}/>
                            <Skeleton width={90} height={14}/>
                            <Skeleton width={70} height={12}/>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Skeleton width={160} height={28} style={{marginBottom: 20}}/>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16}}>
                    {Array.from({length: 6}, (_, i) => (
                        <div key={i} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                            <Skeleton height={260} borderRadius={12}/>
                            <Skeleton width="80%" height={14}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}