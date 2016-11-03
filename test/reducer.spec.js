import reducer from '../src/reducers/reducer';
import addHero from '../src/actions/AddHero.action';

describe('Reducer', () => {

    const initialState = reducer(undefined, {type: undefined});

    describe('upon ADD_HERO', () => {

        it('should increment idCounter', () => {
            const finalState = reducer(initialState, addHero());
            finalState.idCounter.should.equal(initialState.idCounter + 1);
        });

        it('should add a new hero to the list');

        it('should add a hero that has the previous idCounter as id');

        it('should add a hero with no name');

    });

    describe('upon CHANGE_HERO_NAME', () => {

        it('should not change anything if the hero does not exist');

        it('should change the name of an existing hero');

    });

    describe('upon SELECT_HERO', () => {

        it('should not change anything if the hero does not exist');

        it('should select an existing hero');

    });

});
