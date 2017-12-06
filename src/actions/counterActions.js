import * as actionTypes from '../actions/actionTypes';

export function increment() {
	return {
		type: actionTypes.INCREMENT
	};
}
export function decrement() {
	return {
		type: actionTypes.DECREMENT
	};
}
