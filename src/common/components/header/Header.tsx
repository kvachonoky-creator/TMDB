import logo from '@/assets/images/Logo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/routing";
import s from './Header.module.css'
import {Category} from "@/common/constants";
import {getCategoryPath} from "@/common/utils";

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <nav className={s.navContainer}>
                <NavLink to={Path.Main}>Main</NavLink>
                <NavLink to={getCategoryPath(Category.Popular)}>Category Movies</NavLink>
                <NavLink to={Path.Filtered}>Filtered Movies</NavLink>
                <NavLink to={Path.Search}>Search</NavLink>
                <NavLink to={Path.Favorites}>Favorites</NavLink>
            </nav>
            <button>Иконка смены темы</button>
        </header>
    )
}