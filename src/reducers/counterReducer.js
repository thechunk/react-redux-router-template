import * as actionTypes from '../actions/actionTypes';

export default function counterReducer(state = 0, action) {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return state + 1;
		case actionTypes.DECREMENT:
			return state - 1;
		default:
			return state;
	}
}
