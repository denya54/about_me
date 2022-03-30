import React from 'react';
import s from './Link.module.scss';

export const Link = ({className,to,name, ...restProps}) => {

    const finalClassName = `${className} ${s.link}`

    return (
        <a className={finalClassName} {...restProps} href={to} rel={'noreferrer'} target={'_blank'}>{name}</a>
    );
}