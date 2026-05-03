import Skeleton from "react-loading-skeleton";
import s from './MovieSectionSkeleton.module.css'
import type {CSSProperties} from 'react'
import {Link} from "react-router";

type Props = {
    amount?: number
    title?: string
    to?: string
    columns?:number
}

export const MovieSectionSkeleton = ({amount = 6,columns = 6, title, to}: Props) => {
    return (
        <div className={s.section}>
            <div className={s.sectionHeader}>
                {title
                    ? <h2 className={s.sectionTitle}>{title}</h2>
                    : <></>
                }
                {to ? <Link to={to} className={s.viewMore}>View more</Link> : <></>}
            </div>
            <div className={s.container} style={{'--columns': columns} as CSSProperties}>
                {Array.from({length: amount}, (_, i) => (
                    <div key={i} className={s.card}>
                        <Skeleton height={260} borderRadius={12}/>
                        <Skeleton width="80%" height={18}/>
                    </div>
                ))}
            </div>
        </div>
    )
}