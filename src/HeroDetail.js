import React, { Component } from 'react';

const HeroDetail = (props) => {

    const {hero, onHeroChange} = props;

    const onHeroEdit = (event) => {
        onHeroChange(hero.id, event.target.value);
    };

    return(
        <div>
            <h2>{hero.name} details!</h2>
            <div className="hero-edit-id"><label>id: </label>{hero.id}</div>
            <div className="hero-edit-name">
                <label>name: </label>
                <input value={hero.name} onChange={onHeroEdit.bind(this)} placeholder="name"/>
              </div>
        </div>
    );
};

export default HeroDetail;
