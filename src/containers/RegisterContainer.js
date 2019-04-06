import {connect} from 'react-redux';
import {createUser} from '../actions/auth';
import {showWaitingModal} from '../actions/waitingModal';
import Register from '../components/auth/Register';

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        errorMessage: state.auth.errorMessage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createUser: (user) => dispatch(createUser(user)),
        showWaitingModal: () => dispatch(showWaitingModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
