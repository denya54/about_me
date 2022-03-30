import React from 'react';
import Fade from 'react-reveal/Fade';
import s from './Title.module.scss';

export const Title = ({text}) => {
    return (
        <div className={s.title}>
            <Fade left>
                <h2>{text}</h2>
            </Fade>
        </div>
    );
}