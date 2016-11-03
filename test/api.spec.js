import API from '../src/api/api';

describe('API', () => {

    it('should allow changing heroes', () => {
        API.updateHero({id: 5, name: 'Iron Man'}).should.be.fulfilled;
    });

    it('should allow adding heroes', () => {
        API.addHero({id: NaN, name: 'Batman'}).should.be.fulfilled;
    });

    it('should reject heroes with an even ID', () => {
        API.addHero({id: 666, name: 'Satan'}).should.be.rejected;
    });

});
