import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();

chai.use(chaiEnzyme());
chai.use(sinonChai);
