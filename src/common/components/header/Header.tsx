import logo from '@/assets/images/Logo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/routing";

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <NavLink to={Path.Main}>Main</NavLink>
                <NavLink to={Path.Category}>Category Movies</NavLink>
                <NavLink to={Path.Filtered}>Filtered Movies</NavLink>
                <NavLink to={Path.Search}>Search</NavLink>
                <NavLink to={Path.Favorites}>Favorites</NavLink>
            </nav>
            <button>Иконка смены темы</button>
        </header>
    )
}