import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import chaiAsPromised from 'chai-as-promised';

chai.should();

chai.use(chaiAsPromised);
chai.use(chaiEnzyme());
chai.use(sinonChai);
