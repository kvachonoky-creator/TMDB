import s from './searchInput.module.css'
import type {ChangeEvent} from "react";

type Props = {
    onClick: () => void
}

export const SearchInput = ({onClick}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    }

    return (
        <form className={s.container}>
                <input onChange={onChangeHandler} type="search" className={s.myInput} placeholder="Enter a movie title to start searching"/>
            <button type='submit' onChange={() => {}}>Search</button>
        </form>
    )
}