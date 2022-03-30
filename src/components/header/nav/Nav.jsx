import React from 'react';
import {Link} from 'react-scroll';
import s from './Nav.module.scss'

export const Nav = () => {

    const state = [
        {to: 'main', name: 'Home', offset: -80},
        {to: 'skills', name: 'Skills', offset: -70},
        {to: 'projects', name: 'Projects', offset: -70},
        {to: 'contact', name: 'Contact', offset: -70},

    ]
    return (
        <div className={s.nav}>
            {state.map(({to, name, offset}, index)=> {
                return (
                    <Link key={index} to={to} spy smooth offset={offset} duration={500}>{name}</Link>
                )
            })}
        </div>
    );
}