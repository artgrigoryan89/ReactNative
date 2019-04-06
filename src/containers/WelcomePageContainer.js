import {connect} from 'react-redux';
import {logOut} from '../actions/auth';
import {Actions} from 'react-native-router-flux';
import WelcomePage from '../components/WelcomePage';
import {userIsLogedIn} from '../utils/AuthHOC';

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(logOut())
        },
        goToList: () => {
            Actions.list()
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(userIsLogedIn(WelcomePage));
