import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import s from './BurgerNav.module.scss'

export const BurgerNav = () => {
    const state = [
        {to: 'main', name: 'Home', offset: -80},
        {to: 'skills', name: 'Skills', offset: -70},
        {to: 'projects', name: 'Projects', offset: -70},
        {to: 'contact', name: 'Contact', offset: -70},

    ];

    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerClick = () => {
        setIsOpen(!isOpen)
    }

    const isBurgerMenuOpenStyle = isOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems;

    return (
        <div className={s.burgerNav}>
            <div className={s.burgerBtn} onClick={handleBurgerClick}>
                <FontAwesomeIcon  icon={faBars} color={'#f0f0f0'} size={"2x"}/>
            </div>
            <div className={isBurgerMenuOpenStyle}>
                {state.map(({to, name, offset}, index) => {
                    return (
                        <Link key={index}
                              to={to}
                              spy
                              smooth
                              offset={offset}
                              duration={500}
                              onClick={handleBurgerClick}
                        >
                            {name}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}