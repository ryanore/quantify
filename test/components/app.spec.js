import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import App from 'app/components/app';

console.log('app/components/app..................................');
describe('<App />', () => {
  describe('#render()', () => {
    it('renders an app-container div', () => {
      let wrapper = mount(<App />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('app-container');
    });
  })
});
