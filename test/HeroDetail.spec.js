import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import HeroDetail from '../src/HeroDetail';

describe('<HeroDetail/>', () => {

    const hero = {id: 42, name: 'Test'};
    const spy = sinon.spy();
    const wrapper = shallow(<HeroDetail hero={hero} onHeroChange={spy} />);

    it('should print the current hero id', () => {
        wrapper.find('.hero-edit-id').should.have.text('id: 42');
    });

    it('should print the current hero name in an input', () => {
        wrapper.find('.hero-edit-name input').should.have.value('Test');
    });

});