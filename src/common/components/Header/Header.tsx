import logo from '@/assets/images/Logo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/routing";
import s from './Header.module.css'
import {Category} from "@/common/constants";
import {getCategoryPath} from "@/common/utils";
import {Container} from "@/common/components/Container/Container.tsx";
import {useAppDispatch} from "@/common/hooks";
import {toggleTheme} from "@/app/model/appSlice.ts";
import type {Theme} from "@/app/model/appSlice.types.ts";
import {useState} from "react";

type Props = {
    className: Theme;
}

export const Header = ({className}: Props) => {

    const dispatch = useAppDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClickHandler = () => {
        dispatch(toggleTheme())
    }

    const onBurgerClickHandler = () => {
        setIsMenuOpen((isOpen) => !isOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const themeButton = className === 'dark' ? '🌙' :  '☀️'

    return (
        <header className={`${s.header} ${className === 'dark' ? s.dark : ''}`}>
            <Container>
                <div className={s.headerWrapper}>
                    <NavLink to={Path.Main} onClick={closeMenu}><img src={logo} alt="logo"/></NavLink>
                    <nav className={`${s.navContainer} ${isMenuOpen ? s.menuOpen : ''}`}>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 onClick={closeMenu}
                                 to={Path.Main}>Main</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 onClick={closeMenu}
                                 to={getCategoryPath(Category.Popular)}>Category Movies</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 onClick={closeMenu}
                                 to={Path.Filtered}>Filtered Movies</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 onClick={closeMenu}
                                 to={Path.Search}>Search</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''}
                                 onClick={closeMenu}
                                 to={Path.Favorites}>Favorites</NavLink>
                    </nav>
                    <div className={s.actions}>
                        <button className={s.themeButton} type="button" onClick={onClickHandler}>{themeButton}</button>
                        <button
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                            className={`${s.burgerButton} ${isMenuOpen ? s.burgerOpen : ''}`}
                            type="button"
                            onClick={onBurgerClickHandler}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
