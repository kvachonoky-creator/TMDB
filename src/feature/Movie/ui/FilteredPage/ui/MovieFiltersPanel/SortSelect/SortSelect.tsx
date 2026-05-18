import {type ChangeEvent} from "react";
import {SORT_FIELDS, SORT_ORDERS, type SortBy} from "@/common/types";
import s from './SortSelect.module.css'

const sortOptions = [
    {label: 'Popularity desc', value: `${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.DESC}`},
    {label: 'Popularity asc', value: `${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.ASC}`},
    {label: 'Rating desc', value: `${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.DESC}`},
    {label: 'Rating asc', value: `${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.ASC}`},
    {label: 'Release Date desc', value: `${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.DESC}`},
    {label: 'Release Date asc', value: `${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.ASC}`},
    {label: 'Title desc', value: `${SORT_FIELDS.TITLE}.${SORT_ORDERS.DESC}`},
    {label: 'Title asc', value: `${SORT_FIELDS.TITLE}.${SORT_ORDERS.ASC}`},
] satisfies Array<{ label: string; value: SortBy }>

type Props = {
    value: SortBy
    onChange: (value: SortBy) => void
}

export const SortSelect = ({value, onChange}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.currentTarget.value as SortBy)
    }

    return (
        <select className={s.select} name="sortBy" id="sort" value={value} onChange={handleChange}>
            {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
