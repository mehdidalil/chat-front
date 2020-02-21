import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';

const View = (props) => {
	props.checkAuth();
	if (props.logged)
		return props.session.token ? <props.component /> : <Redirect to={props.redirect} />;
	else if (props.unlogged)
		return !props.session.token ? <props.component /> : <Redirect to={props.redirect} />;
	else
		return <props.component />;
};

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps, { checkAuth })(View);