import s from './searchInput.module.css'

export const SearchInput = () => {
    return (
        <div className={s.container}>
            <div className={s.inputWrapper}>
                <input type="text" className={s.myInput} placeholder="Search for a movie"/>
                <button type="button" className={s.clearBtn}>&times;</button>
            </div>
            <button>Search</button>
        </div>
    )
}