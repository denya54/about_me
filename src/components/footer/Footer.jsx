import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import s from './Footer.module.scss';

export const Footer = () => {

    const myLinks = [
        {id: 1001, name: 'LinkedIn', ico: faLinkedin, link: ''},
        {id: 1002, name: 'Telegram', ico: faTelegram, link: 'https://t.me/deniskhves'},
        {id: 1003, name: 'GitHub', ico: faGithubSquare, link: 'https://github.com/denya54'},
        {id: 1004, name: 'Facebook', ico: faFacebook, link: 'https://www.facebook.com/profile.php?id=100006281048167'},
        {id: 1005, name: 'Instagram', ico: faInstagram, link: 'https://www.instagram.com/khvesenya.denis'},
    ]

    return (
        <footer className={s.footerBlock}>
            <div className={s.footerContainer}>
                <p className={s.text}>Denis Khvesenya</p>
                <div className={s.icons}>
                    {myLinks.map(page => {
                        return <a className={s.icon}
                                  href={page.link}
                                  target="_blank"
                                  rel='noreferrer'
                                  key={page.id}
                        >
                            <FontAwesomeIcon icon={page.ico} color={'#f0f0f0'} size={"3x"}/>
                        </a>
                    })}
                </div>
                <p className={s.text}>© 2022 All rights reserved</p>
            </div>
        </footer>
    );
}