import React from 'react';
import Fade from 'react-reveal/Fade';
import s from './Project.module.scss';

export const Project = ({name, description, style, link}) => {
    return (
        <div className={s.projectBlock}>
            <Fade bottom>
                <div className={s.image} style={style}>
                    <a className={s.btn} href={link}>View</a>
                </div>

                <div className={s.titleContainer}>
                    <h3 className={s.title}>{name}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </Fade>
        </div>
    );
}