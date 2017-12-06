import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';

import Counter from './Counter';
import CounterLabel from './CounterLabel';

Enzyme.configure({ adapter: new Adapter() });

test('renders CounterLabel', t => {
	const store = {
		subscribe: () => {},
		dispatch: () => {},
		getState: () => ({ counter: 0 }),
	};
	const wrapper = mount(<Provider store={store}><Counter /></Provider>);
	t.true(wrapper.find('CounterLabel').length === 1);
});
