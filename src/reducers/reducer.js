
const initialState = {
    heroes: [
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
    ],
    selectedHero: null,
    idCounter: 21 // Optimally this would be a uuid generator (server or client made)
};


function checkHeroExists(heroId, heroes) {
    let hero = heroes.find(hero => (hero.id == heroId));
    let heroExists = hero;
    if (!heroExists) {
        throw new Error('Hero with ID '+heroId+' does not exist');
    }
    return hero;
}


function idCounter(state = initialState.idCounter, action) {

    switch (action.type) {
        
        case 'ADD_HERO':

            return state + 1;

        default:

            return state;

    }

}

function hero(state = {id: null, name: ''}, action, idCounter) {

    switch (action.type) {

        case 'CHANGE_HERO_NAME':

            return {id: state.id, name: action.newName};

        case 'ADD_HERO':

            return {...state, id: idCounter};

        default:

            return state;

    }

}

function heroes(state = initialState.heroes, action) {

    switch (action.type) {

        case 'SELECT_HERO':

            checkHeroExists(action.heroId, state);

            return state;

        case 'CHANGE_HERO_NAME':

            let heroObj = checkHeroExists(action.heroId, state);

            return [...state, hero(heroObj, action)];

        case 'ADD_HERO':

            return [...state, hero(null, action, state)];

        default:

            return state;

    }

}

function selectedHero(state = initialState.selectedHero, action) {

    switch (action.type) {

        case 'SELECT_HERO':

            return action.heroId;

        case 'ADD_HERO':

            return action.newHeroId;

        default:

            return state;

    }

}

function reducer(state, action) {

    return {
        heroes: heroes(state.heroes, action),
        selectedHero: selectedHero(state.selectedHero, action)
    }

}

export default reducer;
