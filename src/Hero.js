import React from 'react';

const Hero = (props) => {
    const {id, name, isSelected, onSelectHero} = props;
    return (
        <li
            className={isSelected ? 'selected' : ''}
            onClick={ (e) => {onSelectHero(id)} }
        >
            <span className="badge">{id}</span>{name}
        </li>
    );
};

export default Hero;
