import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

function userIsLogedIn(WrappedComponent) {

    return class extends Component {

        componentWillReceiveProps(newProps) {
            if (!newProps.user) {
                Actions.login()
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

function userIsNotLogedIn(WrappedComponent) {

    return class extends Component {

        componentWillReceiveProps(newProps) {
            if (newProps.user) {
                Actions.welcomePage()
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export {
    userIsLogedIn,
    userIsNotLogedIn
}
