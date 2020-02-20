import React from 'react';
import { connect } from 'react-redux';

const Secret = (props) => {
	console.log(props.session);
	return (
		<div>
			secret
		</div>
	);
};

const mapStateToProps = (state) => ({
	session: state.session
});

export default connect(mapStateToProps)(Secret);