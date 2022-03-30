import React from 'react';
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faUikit} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import s from './Skills.module.scss';

const mySkills = [
    {id: 1, name: 'Development', description: 'React, Redux, Axios etc', ico: faReact},
    {id: 2, name: 'Foundation', description: 'JavaScript, TypeScript, HTML, CSS', ico: faJs},
    {id: 3, name: 'Testing', description: 'Unit Tests, Storybook', ico: faUikit}
]


export const Skills = () => {

    return (
        <div className={s.skillsBlock} id='skills'>
            <div className={s.skillsContainer}>
                <Fade top>
                    <Title text={'My Skills'}/>
                </Fade>
                <div className={s.skills}>
                    <Flip left>
                        {mySkills.map(skill => {
                            return <Skill title={skill.name}
                                          description={skill.description}
                                          icon={skill.ico}
                                          key={skill.id}/>
                        })}
                    </Flip>
                </div>
            </div>
        </div>
    );
}