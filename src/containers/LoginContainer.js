import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {logIn, logInWithFb} from '../actions/auth';
import {showWaitingModal} from '../actions/waitingModal';
import {userIsNotLogedIn} from '../utils/AuthHOC';
import Login from '../components/auth/Login';

const mapStateToProps = state => {
    return {
      user: state.auth.user,
      errorMessage: state.auth.errorMessage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (user) => {
            dispatch(logIn(user))
        },
        onLogInFb: () => {
          dispatch(logInWithFb())
        },
        showWaitingModal: () => {
            dispatch(showWaitingModal())
        },
        onRegisterPress: () => {
            Actions.register()
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(userIsNotLogedIn(Login));
