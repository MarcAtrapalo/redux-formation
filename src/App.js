import React, { Component } from 'react';
import MyHeroDetail from './MyHeroDetail';


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

        heroes.splice(heroes.indexOf(heroes.find((hero) => (hero.id === id))), 1);

        this.setState({
            heroes: [...heroes, {id, name}]
        });
    }

    getHero(id) {
        let heroes = this.state.heroes;

        const hero = heroes.find((hero) => (hero.id === id));
        return hero;
    }

  render() {

    return (
      <div>
        <h1>Tour of Reduced Heroes</h1>
        <h2>My Heroes</h2>

        <ul className="heroes">
        {this.state.heroes.map((hero) => (
          <li key={hero.id} className={(hero == this.state.selectedHero) ? 'selected' : ''}
          onClick={this.onHeroChange.bind(this, hero.id)}>
            <span className="badge">{hero.id}</span>{hero.name}
          </li>
        ))}
        </ul>
          { this.state.selectedHero != null ?
              (<MyHeroDetail hero={this.getHero(this.state.selectedHero)} onHeroChange={this.onHeroEdit.bind(this)}></MyHeroDetail>)
              :
              <div></div>
          }
      </div>
    );
  }
}
