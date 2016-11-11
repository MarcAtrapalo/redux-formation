import React, { Component } from 'react';
import Hero from './Hero';


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {heroes, selectedHero, onNewHero, onSelectHero} = this.props;

        return (
            <ul className="heroes">

                {heroes.map((hero) => (
                    <Hero
                        key={hero.id}
                        id={hero.id}
                        name={hero.name}
                        isSelected={hero.id === selectedHero}
                        onSelectHero={onSelectHero}
                    >
                    </Hero>
                ))}

                <li onClick={onNewHero}>
                    <span className="badge">+</span><strong>New Hero</strong>
                </li>

            </ul>
        );
    }

}