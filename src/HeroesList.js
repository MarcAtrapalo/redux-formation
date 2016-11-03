import React, { Component } from 'react';


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {heroes, selectedHero, onNewHero, onSelectHero} = this.props;

        return (
            <ul className="heroes">

                {heroes.map((hero) => (
                    <li key={hero.id}
                        className={(hero.id == selectedHero) ? 'selected' : ''}
                        onClick={ (e) => {onSelectHero(hero.id)} }
                    >
                        <span className="badge">{hero.id}</span>{hero.name}
                    </li>
                ))}

                <li onClick={onNewHero}>
                    <span className="badge">+</span><strong>New Hero</strong>
                </li>

            </ul>
        );
    }

}