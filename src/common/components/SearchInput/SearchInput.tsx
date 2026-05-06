import s from './searchInput.module.css'
import {type ChangeEvent, useState} from "react";

type Props = {
    onClick: (title: string) => void
    className?: string
}

export const SearchInput = ({onClick, className}: Props) => {

    const [value, setValue] = useState('')

    const disabled = !value.trim()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if (e.currentTarget.value === '') {
            onClick('')
        }
    }

    const onClickHandler = () => {
        onClick(value.trim())
        setValue('')
    }

    return (
        <div className={`${s.container} ${className ?? ''}`}>
            <input value={value} type="search" className={s.myInput}
                   placeholder="Enter a movie title to start searching" onChange={onChangeHandler}/>
            <button disabled={disabled} onClick={onClickHandler}>Search
            </button>
        </div>
    )
}
