import React from 'react';
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import s from './Projects.module.scss';
import CardIMG from '../../assets/images/imageForCard.jpg'
import SocNetIMG from '../../assets/images/social.png'
import TodoIMG from '../../assets/images/todo.jpg'

export const Projects = () => {

    const myWorks = [
        {
            id: 101,
            name: 'Social Network',
            description: 'Imitation of an online platform that is used for communication, dating, creating social relationships between people who have similar interests',
            link: 'https://denya54.github.io/social-network/',
            ico: {
                backgroundImage: `url(${SocNetIMG})`,
            }
        },
        {
            id: 102,
            name: 'To Do List',
            description: 'A list of things you need to do or want to do. Here you can manage your tasks!',
            link: 'https://denya54.github.io/taskslist',
            ico: {
                backgroundImage: `url(${TodoIMG})`,
            }
        },
        {
            id: 103,
            name: 'Cards App',
            description: 'In this mini application you can choose flashcards and learn from them. Good luck!',
            link: 'https://denya54.github.io/friday-project/',
            ico: {
                backgroundImage: `url(${CardIMG})`,
            }
        },
    ]


    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={s.projectsContainer}>
                <Fade top>
                    <Title text={'My projects'}/>
                </Fade>
                <div className={s.projects}>
                    {myWorks.map(work => {
                        return <Project
                            style={work.ico}
                            key={work.id}
                            name={work.name}
                            // backgroundImage={work.backgroundImage}
                            description={work.description}
                            link={work.link}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}