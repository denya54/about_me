import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'
import s from './Main.module.scss';

export const Main = () => {
    return (
        <div className={s.mainBlock} id={'main'}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <h2>Hello, I am <span
                        className={s.highlight}>Denis Khvesenya</span></h2>
                    <p className={s.secondTitle}>I am a Frontend developer.</p>
                </div>
                <Tilt className="Tilt" options={{max: 25}}>
                    <Fade right>
                        <div className={s.photo}></div>
                    </Fade>
                </Tilt>
            </div>
        </div>
    );
}