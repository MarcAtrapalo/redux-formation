import React from 'react';

const Hero = (props) => {
    const {id, name, isSelected, onSelect} = props;
    return (
        <li
            className={isSelected ? 'selected' : ''}
            onClick={ (e) => {onSelect(id)} }
        >
            <span className="badge">{id}</span>{name}
        </li>
    );
};

export default Hero;
