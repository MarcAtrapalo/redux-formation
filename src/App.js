import React, { Component } from 'react';
import HeroDetail from './HeroDetail';
import HeroList from './HeroesList';


export default class App extends Component {

    constructor() {
        super();
        this.state = {};
        this.state.heroes = [
            { "id": 11, "name": "Mr. Nice" },
            { "id": 12, "name": "Narco" },
            { "id": 13, "name": "Bombasto" },
            { "id": 14, "name": "Celeritas" },
            { "id": 15, "name": "Magneta" },
            { "id": 16, "name": "RubberMan" },
            { "id": 17, "name": "Dynama" },
            { "id": 18, "name": "Dr IQ" },
            { "id": 19, "name": "Magma" },
            { "id": 20, "name": "Tornado" }
        ];
        this.state.selectedHero = null;
    }

    onHeroChange(id) {
        this.setState({
            selectedHero: id
        });

        console.log(id);
    }

    onHeroEdit(id, name) {
        let heroes = [...this.state.heroes];

        heroes.splice(heroes.indexOf(heroes.find((hero) => (hero.id === id))), 1, {id, name});

        this.setState({
            heroes
        });
    }

    onHeroAdd() {
        const heroes = this.state.heroes;
        const newId = heroes[heroes.length - 1].id + 1;
        const newHero = {
            id: newId,
            name: ''
        };

        this.setState({
            heroes: [...heroes, newHero],
            selectedHero: newId
        });
    }

    getCurrentHero() {
        const id = this.state.selectedHero;
        let heroes = this.state.heroes;

        const hero = heroes.find((hero) => (hero.id === id));
        return hero;
    }

    render() {
        return (
            <div>
                <h1>Tour of Reduced Heroes</h1>
                <h2>My Heroes</h2>

                <HeroList heroes={this.state.heroes}
                          selectedHero={this.getCurrentHero.call(this)}
                          onNewHero={this.onHeroAdd.bind(this)}
                          onSelectHero={this.onHeroChange.bind(this)}
                ></HeroList>

                { /* if */ this.state.selectedHero != null &&
                    <HeroDetail hero={this.getCurrentHero.call(this)} onHeroChange={this.onHeroEdit.bind(this)}></HeroDetail>
                }
            </div>
        );
    }
}
