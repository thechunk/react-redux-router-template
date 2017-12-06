import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';
import * as actionTypes from '../actions/actionTypes';
import CounterLabel from './CounterLabel';
import CounterButton from './CounterButton';

class Counter extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			counter: 0
		};
	}

	render() {
		return (
			<div>
				<CounterLabel counter={this.props.counter} />
				<CounterButton
					type={actionTypes.INCREMENT}
					fn={this.props.actions.increment} />
				<CounterButton
					type={actionTypes.DECREMENT}
					fn={this.props.actions.decrement} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		counter: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(counterActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
