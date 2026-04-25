import {NavLink} from "react-router";
import s from './CategoryPage.module.css'

export const CategoryPage = () => {
    return (
        <section>
            <NavLink to='' className={({isActive}) => (isActive ? s.active : '')}>Popular Movies</NavLink>
            <NavLink to='' className={({isActive}) => (isActive ? s.active : '')}>Top Rated</NavLink>
            <NavLink to='' className={({isActive}) => (isActive ? s.active : '')}>Upcoming</NavLink>
            <NavLink to='' className={({isActive}) => (isActive ? s.active : '')}>Now Playing Movies</NavLink>


            <h2>Category</h2>
        </section>
    )
}