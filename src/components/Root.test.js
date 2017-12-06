import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import Root from './Root';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

test('renders Counter', t => {
	const wrapper = shallow(<Root />);
	t.true(wrapper.contains(<Counter />));
});
