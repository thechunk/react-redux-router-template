import React from 'react';
import * as actionTypes from '../actions/actionTypes';

const CounterButton = ({type, fn}) => {
	switch(type) {
		case actionTypes.INCREMENT:
			return (
				<button onClick={fn}>
					Increment
				</button>
			)
		case actionTypes.DECREMENT:
			return (
				<button onClick={fn}>
					Decrement
				</button>
			)
	}
};

export default CounterButton;
