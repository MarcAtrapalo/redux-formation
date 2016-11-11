import React, { Component } from 'react';
import {connect} from 'react-redux';
import ChangeHeroName from './actions/ChangeHeroName.action';

export const HeroDetail = (props) => {

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

// const mapStateToProps = (state) => ({
//     hero: state.heroes[state.selectedHero]
// });
//
// export const mapDispatchToProps = (dispatch) => ({
//     onHeroChange: (heroId, heroName) => {dispatch(ChangeHeroName(heroId, heroName))}
// });
//
// const DecoratedHeroDetail = connect(mapStateToProps, mapDispatchToProps)(HeroDetail);

export default HeroDetail;
