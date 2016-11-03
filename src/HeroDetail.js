import React, { Component } from 'react';

const HeroDetail = (props) => {

    const {hero, onHeroChange} = props;

    const onHeroEdit = (event) => {
        console.log("hola");
        onHeroChange(hero.id, event.target.value);
    };

    return(
        <div>
            <h2>{hero.name} details!</h2>
            <div><label>id: </label>{hero.id}</div>
            <div>
                <label>name: </label>
                <input onChange={onHeroEdit.bind(this)} placeholder="name"/>
              </div>
        </div>
    );
};

export default HeroDetail;
