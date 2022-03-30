import React from 'react';
import s from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Skill = ({icon, title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={icon} color={'#f0f0f0'} size={"4x"}/>
            </div>
            <h3 className={s.title}>
                {title}
            </h3>
            <div className={s.description}>
                {description}
            </div>
        </div>
    );
}