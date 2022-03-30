import React from 'react';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";
import s from './Header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
                <BurgerNav/>
            </div>
        </header>
    );
}