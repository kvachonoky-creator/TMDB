import logo from '@/assets/images/Logo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/routing";
import s from './Header.module.css'
import {Category} from "@/common/constants";
import {getCategoryPath} from "@/common/utils";
import {Container} from "@/common/components/Container/Container.tsx";

export const Header = () => {
    return (
        <header>
            <Container>
                <div className={s.headerWrapper}>
                    <NavLink to={Path.Main}><img src={logo} alt="logo"/></NavLink>
                    <nav className={s.navContainer}>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 to={Path.Main}>Main</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 to={getCategoryPath(Category.Popular)}>Category Movies</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 to={Path.Filtered}>Filtered Movies</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 to={Path.Search}>Search</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 to={Path.Favorites}>Favorites</NavLink>
                    </nav>
                    <button>*_*</button>
                </div>
            </Container>
        </header>
    )
}